import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '@app/helpers/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	private role: string;
	
	constructor(
		private router: Router,
		private globals: Globals
    ) {
		this.role = globals.currentuser;
	}

    ngOnInit() {
		
    }
	
	onClick(us: string, ps: string){
		if (us=='admin' && ps=='admin')
		{
			this.globals.currentuser='admin';
			this.router.navigate(['/home']);
		}
		else
		if (us=='manager' && ps=='manager')
		{
			this.globals.currentuser='manager';
			this.router.navigate(['/home']);
		}
		else
		if (us=='chef' && ps=='chef')
		{
			this.globals.currentuser='chef';
			this.router.navigate(['/home']);
		}
		else
		if (us=='localcustomer' && ps=='localcustomer')
		{
			this.globals.currentuser='localcustomer';
			this.router.navigate(['/home']);
		}
		else
		if (us=='customer' && ps=='customer')
		{
			this.globals.currentuser='customer';
			this.router.navigate(['/home']);
		}
		else
			alert('Sai tên đăng nhập hoặc mật khẩu!');
	}
}