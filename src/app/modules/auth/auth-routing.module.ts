import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

export const AuthRoutedModule = [
	LoginComponent,
	LogoutComponent,
	RegisterComponent,
]

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
	{
        path: 'logout',
        component: LogoutComponent
    },
	{
        path: 'register',
        component: RegisterComponent
    },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
