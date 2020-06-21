import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule, MenuRoutedModule } from './menu-routing.module';

@NgModule({
	declarations: [
		...MenuRoutedModule
	],
	imports: [
		MenuRoutingModule,
	]
})
export class MenuModule { }