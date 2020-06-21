import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemComponent } from './list-item/list-item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

export const MenuRoutedModule = [
	ListItemComponent,
	CreateItemComponent,
	ItemDetailComponent
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
  {
    path: 'create-item',
    component: CreateItemComponent,
  },
  {
    path: 'item-detail/:id',
    component: ItemDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
