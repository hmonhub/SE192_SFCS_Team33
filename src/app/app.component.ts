import { Component, OnInit} from '@angular/core';
import { Globals } from './helpers/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'SFCS';
	
	constructor (public globals: Globals){		
	}
	
	
	ngOnInit(): void {
		
	}
}