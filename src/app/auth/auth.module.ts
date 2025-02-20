import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { PasswordsComponent } from './passwords/passwords.component';
import { StudentdashboardComponent } from '../student/studentdashboard/studentdashboard.component';

@NgModule({
  declarations: [ 
    LoginComponent,
    SignupComponent,
    PasswordsComponent,
   ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { } 
