import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './helpers/material.module';
import { FormsModule } from '@angular/forms';
//-----------------------------------------------------------------------------------
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService }  from '@app/helpers/mock/data.service';
import { IngredientService }  from '@app/helpers/mock/ingredient.service';
import { ItemService }  from '@app/helpers/mock/item.service';
import { EmployeeService }  from '@app/helpers/mock/employee.service';
import { Globals } from './helpers/user';
//-----------------------------------------------------------------------------------
@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(DataService, { dataEncapsulation: false })
	],
	providers: [Globals,DataService, IngredientService, ItemService, EmployeeService],
	bootstrap: [AppComponent]
})
export class AppModule { }