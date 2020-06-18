import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemComponent } from './list-item/list-item.component';

export const MenuRoutedModule = [
	ListItemComponent,
]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-item',
    pathMatch: 'full'
  },
  {
    path: 'list-item',
    component: ListItemComponent,
  },
  /*{
    path: 'add-item',
    component: AddItemComponent,
  },
  {
    path: 'item-detail/:id',
    component: ItemDetailComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
