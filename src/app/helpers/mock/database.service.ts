import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
	createDb() {
		const items = [
			{
				id: 1,
				name: 'Cơm gà',
				price: 20000,
				img: '@assets/images/i_01.jpg'
			},
			{
				id: 2,
				name: 'Bún',
				price: 15000,
				img: null
			},
			{
				id: 3,
				name: 'Cháo',
				price: 15000,
				img: null
			},
		];
		return {items};
	}

	genId(items: Item[]): number {
		return items.length > 0 ? Math.max(...items.map(items => items.id)) + 1 : 11;
	}
}