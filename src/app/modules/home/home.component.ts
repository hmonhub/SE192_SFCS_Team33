import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
	/*template: `
		<router-outlet></router-outlet>
	`,*/
})
export class HomeComponent implements OnInit {
	
	constructor() { }

	ngOnInit(): void {
	}
}
