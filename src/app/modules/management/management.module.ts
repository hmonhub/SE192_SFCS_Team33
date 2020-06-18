import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule, ManagementRoutedModule } from './management-routing.module';


@NgModule({
	declarations: [
		...ManagementRoutedModule
	],
	imports: [
		ManagementRoutingModule
	]
})
export class ManagementModule { }