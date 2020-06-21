import { Component, OnInit } from '@angular/core';
import { Item } from '@app/helpers/interfaces';
import { ItemService } from '@app/helpers/mock/item.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
	source: Item[];
	selected: Item;
	action: string;
	
	constructor(private service: ItemService) {}
	
	displayedColumns: string[] = ['id', 'img_s', 'name', 'price', 'des', 'action'];
	
	ngOnInit() {
		this.getList();
		this.action='idle';
	}
	
	getList(): void {
    this.service.getitem()   
		.subscribe(source => this.source = source);
	}
	
	_name: string;
	_price: number;
	_des: string;
	
	onClick(action: string, elem: Item): void {
		if (action=='add') {
			this.action='add';
			this.selected=null;
		}
		
		if (action=='edit') {
			this.action='edit';
			this.selected=elem;
			this._name=elem.name;
			this._price=elem.price;
			this._des=elem.des;
		}
		
		if (action=='submitedit')
		{
			if (this._name!=null)
				this.selected.name = this._name;
			if (this._price!=null)
				this.selected.price = this._price;
			if (this._des!=null)
				this.selected.des= this._des;
    
			if (this._name!=null || this._price!=null || this._des!=null)
			{
				this.service.updateitem(this.selected);
				alert("Thông tin cập nhật thành công!");
			}
			else alert("Không có thông tin mới!");

		}
		
		if (action=='remove') {
			if (confirm("Xóa?")){
				this.source = this.source.filter(h => h !== elem);
				this.service.removeitem(elem).subscribe();
				if (elem==this.selected){
					this.selected=null;
					this.action='idle';
				}    
			}
		}
		
		if (action=='cancel') {
			this.action='idle';
			this.selected = null;
			this._name=null;
			this._price=null;
			this._des=null;
		}
	}
	
	add(name: string, price: number, des: string): void {
		if (!name || !price || !des){
			alert("Điền đầy đủ thông tin!");
			return;
		}

		this.service.additem(<unknown>{name, price, des} as Item)
			.subscribe(elem => {
				this.source.push(elem);
				this.getList();
			});
			alert('Thêm thành công!');
			
	}
}