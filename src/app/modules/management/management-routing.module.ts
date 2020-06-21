import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ManagementComponent } from './management.component';
import { IngredientComponent } from './ingredient/ingredient.component'
import { MenuComponent } from './menu/menu.component'
import { EmployeeComponent } from './employee/employee.component'

export const ManagementRoutedModule = [
	IngredientComponent,
	MenuComponent,
	EmployeeComponent,
]

const routes: Routes = [
	{
        path: 'ingredient',
		component: IngredientComponent
    },
	{
        path: 'menu',
		component: MenuComponent
    },
	{
        path: 'employee',
		component: EmployeeComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
