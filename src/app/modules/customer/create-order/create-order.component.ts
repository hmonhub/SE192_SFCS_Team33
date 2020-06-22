import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from '@app/helpers/user';
import { Item } from '@app/helpers/interfaces';
import { ItemService } from '@app/helpers/mock/item.service';
import { ItemOrder } from '@app/helpers/interfaces';
//import { Order } from '@app/helpers/interfaces';
//import { OrderService } from '@app/helpers/mock/order.service';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-create-order',
	templateUrl: './create-order.component.html',
	styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
	source: Item[];
	action: string;
	
	
	//order
	_time_created: string;
	_order_type: string;
	_total: number;
	
	//list item
	_toadd_item: Item;
	_toadd_number: number;
	list_item: ItemOrder[];
	displayedColumns: string[] = ['id', 'name', 'price', 'number', 'action'];
	
	constructor(
		private service: ItemService,
		public globals: Globals,
	) {}
	
	ngOnInit() {
		this.getList();
		this.get_date();
		
		this.list_item = [];
		this.action = 'idle';
		this._total=0;
	}
	
	getList(): void {
    this.service.getitem()   
		.subscribe(source => this.source = source);
	}
	
	onClick(action: string, ele: ItemOrder): void {
		if (action=='additem') {
			this.action='add';
		}
		
		if (action=='additemtolist') {
			let i = {} as ItemOrder;
			i.id = this.list_item.length+1;
			i.name = this._toadd_item.name;
			i.price = this._toadd_item.price;
			i.no = this._toadd_number;
		
			this.list_item.push(i);
			
			this._total+=i.price*i.no;
			//this.cal_total();
			
			this._toadd_item=null;
			this._toadd_number=null;
		}
		
		if (action=='additemcancel') {
			this.action='idle';
			this._toadd_item=null;
			this._toadd_number=null;
		}
		
	}
	
	get_date() {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var yyyy = today.getFullYear();

		this._time_created = dd + '/' + mm + '/' + yyyy;
		document.write(this._time_created);
	}
	
	/*cal_total()
	{
		var t;
		for (let i of this.list_item) {
			t+=i.price*i.no;
		}
		
		this._total+=t;
	}*/
}
