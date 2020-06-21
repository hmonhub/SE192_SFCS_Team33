import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class IngredientService {
	private Url = 'api/ingredients';
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor( private http: HttpClient) { }

	getitem(): Observable<Ingredient[]> {
		return this.http.get<Ingredient[]>(this.Url)
	}
	
	additem(elem: Ingredient): Observable<Ingredient> {
		return this.http.post<Ingredient>(this.Url, elem, this.httpOptions)
	}

	updateitem(elem: Ingredient): Observable<any> {
		return this.http.put(this.Url, elem, this.httpOptions)
	}
	
	removeitem(elem: Ingredient | number): Observable<Ingredient> {
		const id = typeof elem === 'number' ? elem : elem.id;
		const url = `${this.Url}/${id}`;

		return this.http.delete<Ingredient>(url, this.httpOptions)
	}
}