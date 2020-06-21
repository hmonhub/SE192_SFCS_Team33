import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./modules/home/home.module')
			.then(m => m.HomeModule)
	},
	{
		path: 'management',
		loadChildren: () => import('./modules/management/management.module')
			.then(m => m.ManagementModule)
		
	},
	{
		path: 'auth',
		loadChildren: () => import('./modules/auth/auth.module')
			.then(m => m.AuthModule)
	},
	{
		path: 'customer',
		loadChildren: () => import('./modules/customer/customer.module')
			.then(m => m.CustomerModule)
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
