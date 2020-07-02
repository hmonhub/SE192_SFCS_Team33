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
	
	constructor(private service: ItemService) {}
	
	ngOnInit() {
		this.getList();
	}
	getList(): void {
    this.service.getitem()   
		.subscribe(source => this.source = source);
	}
}
