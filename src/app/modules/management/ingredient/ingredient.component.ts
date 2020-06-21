import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@app/helpers/interfaces';
import { IngredientService } from '@app/helpers/mock/ingredient.service';

@Component({
	selector: 'app-ingredient',
	templateUrl: './ingredient.component.html',
	styleUrls: ['./ingredient.component.scss']
})

export class IngredientComponent implements OnInit {
	source: Ingredient[];
	selected: Ingredient;
	action: string;
	
	constructor(private service: IngredientService) {}
	
	displayedColumns: string[] = ['id', 'name', 'stock', 'action'];
	
	ngOnInit() {
		this.getList();
		this.action='idle';
	}
	
	getList(): void {
    this.service.getitem()   
		.subscribe(source => this.source = source);
	}
	
	_name: string;
	_stock: number;
	_unit: string;
	
	onClick(action: string, elem: Ingredient): void {
		if (action=='add') {
			this.action='add';
			this.selected=null;
		}
		
		if (action=='edit') {
			this.action='edit';
			this.selected=elem;
			this._name=elem.name;
			this._stock=elem.stock;
			this._unit=elem.unit;
		}
		
		if (action=='submitedit')
		{
			if (this._name!=null)
				this.selected.name = this._name;
			if (this._stock!=null)
				this.selected.stock = this._stock;
			if (this._unit!=null)
				this.selected.unit= this._unit;
    
			if (this._name!=null || this._stock!=null || this._unit!=null)
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
			this._stock=null;
			this._unit=null;
		}
	}
	
	add(name: string, stock: number, unit: string): void {
		if (!name || !stock || !unit){
			alert("Điền đầy đủ thông tin!");
			return;
		}

		this.service.additem(<unknown>{name, stock, unit} as Ingredient)
			.subscribe(elem => {
				this.source.push(elem);
				this.getList();
			});
			alert('Thêm thành công!');
			
	}
}