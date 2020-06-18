import { Injectable } from '@angular/core';
import { Item } from './interfaces';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Service {
	private itemsUrl = 'api/items';
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
  
	constructor( private http: HttpClient) { }

	getItems(): Observable<Item[]> {
		return this.http.get<Item[]>(this.itemsUrl)
	}

	addItem(item: Item): Observable<Item> {
		return this.http.post<Item>(this.itemsUrl, item, this.httpOptions)
	}

	updateItem(item: Item): Observable<any> {
		return this.http.put(this.itemsUrl, item, this.httpOptions)
	}
	removeItem(item: Item | number): Observable<Item> {
		const id = typeof item === 'number' ? item : item.id;
		const url = `${this.itemsUrl}/${id}`;

		return this.http.delete<Item>(url, this.httpOptions)
	}
}