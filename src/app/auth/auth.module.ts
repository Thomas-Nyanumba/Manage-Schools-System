import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { PasswordsComponent } from './passwords/passwords.component';
import { StudentdashboardComponent } from '../student/studentdashboard/studentdashboard.component';
import { FormsModule } from '@angular/forms';
import { RolesComponent } from './roles/roles.component';

@NgModule({
  declarations: [ 
    LoginComponent,
    SignupComponent,
    PasswordsComponent,
    RolesComponent
   ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { } 
