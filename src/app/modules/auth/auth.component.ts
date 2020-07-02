import { Component, OnInit } from '@angular/core';
//import { MENU_ITEMS } from './hr-menu';

@Component({
	selector: 'app-auth',
	template: `
		<router-outlet></router-outlet>
	`,
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
