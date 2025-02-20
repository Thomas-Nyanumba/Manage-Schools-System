import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { StudentsEnrollmentComponent } from './student/studentsenrollment/studentsenrollment.component';
import { StudentsProfileComponent } from './student/studentsprofile/studentsprofile.component';
import { FormsModule } from '@angular/forms';
import { studentsgradescomponent } from './student/studentsgrades/studentsgrades.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
