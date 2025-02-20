import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentsEnrollmentComponent } from './studentsenrollment/studentsenrollment.component';
import { StudentsProfileComponent } from './studentsprofile/studentsprofile.component';
import { studentsgradescomponent } from './studentsgrades/studentsgrades.component';

const routes: Routes = [
  { path: 'dashboard', component: StudentdashboardComponent },
  { path: 'enroll', component: StudentsEnrollmentComponent }, 
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'profile', component: StudentsProfileComponent }, 
  { path: 'grades', component: studentsgradescomponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
