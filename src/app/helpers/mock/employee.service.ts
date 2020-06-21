import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	private Url = 'api/employees';
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor( private http: HttpClient) { }

	getitem(): Observable<Employee[]> {
		return this.http.get<Employee[]>(this.Url)
	}
	
	additem(elem: Employee): Observable<Employee> {
		return this.http.post<Employee>(this.Url, elem, this.httpOptions)
	}

	updateitem(elem: Employee): Observable<any> {
		return this.http.put(this.Url, elem, this.httpOptions)
	}
	
	removeitem(elem: Employee | number): Observable<Employee> {
		const id = typeof elem === 'number' ? elem : elem.id;
		const url = `${this.Url}/${id}`;

		return this.http.delete<Employee>(url, this.httpOptions)
	}
}