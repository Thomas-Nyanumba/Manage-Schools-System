import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { PasswordsComponent } from './auth/passwords/passwords.component';
import { LoginComponent } from './auth/login/login.component';
import { StudentsProfileComponent } from './student/studentsprofile/studentsprofile.component';
import { studentsgradescomponent } from './student/studentsgrades/studentsgrades.component';
import { RolesComponent } from './auth/roles/roles.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' }, //  Redirects root to signup
  { path: 'signup', component: SignupComponent }, //  Renders SignupComponent first
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: PasswordsComponent },
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path: '**', redirectTo: 'student/dashboard' }, // Redirect to student dashboard by default
  { path: 'students', component: StudentsProfileComponent },
  { path: 'grades', component: studentsgradescomponent},
  { path: 'roles', component: RolesComponent, canActivate: [authGuard], data: { role: 'admin' } }

  ];
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
