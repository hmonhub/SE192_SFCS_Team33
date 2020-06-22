import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule, CustomerRoutedModule } from './customer-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';

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
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatGridListModule,
		MatDividerModule,
		MatIconModule,
		MatSelectModule,
		MatDatepickerModule,
		MatListModule,
	]
})
export class CustomerModule { }