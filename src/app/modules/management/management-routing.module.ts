import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management.component';

export const ManagementRoutedModule = [
	ManagementComponent,
]

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module')
          .then(m => m.MenuModule),
      },
	  //more path add later
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
