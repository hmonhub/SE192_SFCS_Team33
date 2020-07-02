import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreateOrderComponent } from './create-order/create-order.component';
export const CustomerRoutedModule = [
	MenuComponent,
	CreateOrderComponent,
]

const routes: Routes = [
	{
		path: 'menu',
		component: MenuComponent
    },
	{
		path: 'create-order',
		component: CreateOrderComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
