import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class OrderService {
	private Url = 'api/orders';
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor( private http: HttpClient) { }

	getitem(): Observable<Order[]> {
		return this.http.get<Order[]>(this.Url)
	}
	
	additem(elem: Order): Observable<Order> {
		return this.http.post<Order>(this.Url, elem, this.httpOptions)
	}

	updateitem(elem: Order): Observable<any> {
		return this.http.put(this.Url, elem, this.httpOptions)
	}
	
	removeitem(elem: Order | number): Observable<Order> {
		const id = typeof elem === 'number' ? elem : elem.id;
		const url = `${this.Url}/${id}`;

		return this.http.delete<Order>(url, this.httpOptions)
	}
}