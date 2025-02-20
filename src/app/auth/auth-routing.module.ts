import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RolesComponent } from './roles/roles.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: '', redirectTo: '/signup', pathMatch: 'full' }, // Default route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Default landing page
  


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

 