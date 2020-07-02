import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '@app/helpers/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
    constructor(
		private router: Router,
		private globals: Globals
    ) { 
		globals.currentuser = 'anonymous';
		this.router.navigate(['/home']);
	}
}