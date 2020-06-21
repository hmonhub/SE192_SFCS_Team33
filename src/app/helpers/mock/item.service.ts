import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class ItemService {
	private Url = 'api/items';
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor( private http: HttpClient) { }

	getitem(): Observable<Item[]> {
		return this.http.get<Item[]>(this.Url)
	}
	
	additem(elem: Item): Observable<Item> {
		return this.http.post<Item>(this.Url, elem, this.httpOptions)
	}

	updateitem(elem: Item): Observable<any> {
		return this.http.put(this.Url, elem, this.httpOptions)
	}
	
	removeitem(elem: Item | number): Observable<Item> {
		const id = typeof elem === 'number' ? elem : elem.id;
		const url = `${this.Url}/${id}`;

		return this.http.delete<Item>(url, this.httpOptions)
	}
}