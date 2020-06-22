import { Component, OnInit } from '@angular/core';
import { Order } from '@app/helpers/interfaces';
import { OrderService } from '@app/helpers/mock/order.service';
import { ItemOrder } from '@app/helpers/interfaces';

import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({height: '0px', minHeight: '0'})),
			state('expanded', style({height: '*'})),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],
})

export class OrderComponent implements OnInit {
	source: Order[];
	selected: Order;
	action: string;
	expandedElement: Order;
	
	displayedColumns: string[] = ['id', 'customer', 'time_created', 'total', 'order_status', 'action'];
	
	constructor(private service: OrderService) {}
	
	ngOnInit() {
		this.getList();
		this.action='idle';
	}
	
	getList(): void {
    this.service.getitem()   
		.subscribe(source => this.source = source);
	}
	
	_order_status: number;
	
	onClick(action: string, elem: Order): void {		
		if (action=='edit') {
			this.action='edit';
			this.selected=elem;
			switch (elem.order_status) {
				case 'Mới': {
					this._order_status=0;
					break;
				}
				case 'Chấp nhận': {
					this._order_status=1;
					break;
				}
				case 'Chờ giao': {
					this._order_status=2;
					break;
				}
				case 'Hoàn thành': {
					this._order_status=3;
					break;
				}
			}
			//this._order_status=elem.order_status;
		}
		
		if (action=='submitedit')
		{
			switch (this._order_status) {
				case 0: {
					this.selected.order_status='Mới';
					break;
				}
				case 1: {
					this.selected.order_status='Chấp nhận';
					break;
				}
				case 2: {
					this.selected.order_status='Chờ giao';
					break;
				}
				case 3: {
					this.selected.order_status='Hoàn thành';
					break;
				}
			}
			//if (this._name!=null)
				//this.selected.order_status = this._order_status;
    
			//if (this._name!=null || this._price!=null || this._des!=null)
			//{
				this.service.updateitem(this.selected);
				alert("Thông tin cập nhật thành công!");
			//}
			//else alert("Không có thông tin mới!");
		}
				
		if (action=='cancel') {
			this.action='idle';
			this.selected = null;
			this._order_status=null;
		}
	}
}