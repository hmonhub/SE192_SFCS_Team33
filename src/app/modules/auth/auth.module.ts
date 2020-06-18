import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule, AuthRoutedModule } from './auth-routing.module';


@NgModule({
	declarations: [
		...AuthRoutedModule
	],
	imports: [
		AuthRoutingModule
	]
})
export class AuthModule { }
