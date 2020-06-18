import { Component, OnInit } from '@angular/core';
//import { MENU_ITEMS } from './hr-menu';

@Component({
	selector: 'app-management',
	template: `
		<router-outlet></router-outlet>
	`,
})
export class ManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
