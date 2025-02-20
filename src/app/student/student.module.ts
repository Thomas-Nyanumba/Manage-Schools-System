import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentsProfileComponent } from './studentsprofile/studentsprofile.component';
import { studentsgradescomponent } from './studentsgrades/studentsgrades.component';
import { StudentsEnrollmentComponent } from './studentsenrollment/studentsenrollment.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentRoutingModule } from './student-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'profile', component: StudentsProfileComponent },
  { path: 'grades', component: studentsgradescomponent },
  { path: 'enrollment', component: StudentsEnrollmentComponent },
  { path: '', component: StudentdashboardComponent }

];

@NgModule({
  declarations: [
    StudentsProfileComponent,
    studentsgradescomponent,
    StudentsEnrollmentComponent,
    StudentdashboardComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'dashboard', component: StudentdashboardComponent }, // Route inside StudentModule
    ]),
  ]
})
export class StudentModule { }

