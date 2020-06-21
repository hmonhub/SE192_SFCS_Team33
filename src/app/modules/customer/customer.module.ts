import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule, CustomerRoutedModule } from './customer-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [
		...CustomerRoutedModule
	],
	imports: [
		CustomerRoutingModule,
		CommonModule,
		MatButtonModule,
		MatCardModule,
		MatTableModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatGridListModule,
		MatDividerModule,
	]
})
export class CustomerModule { }