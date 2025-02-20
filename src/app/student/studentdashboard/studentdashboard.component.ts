import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  totalStudents: number = 0;
  newEnrollments: number = 0;
  apiUrl = 'http://localhost:3001/students'; // JSON Server backend

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchStudentsStats();
  }

  fetchStudentsStats(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((students) => {
      this.totalStudents = students.length;
      this.newEnrollments = students.filter(s => s.enrollmentStatus === 'new').length; 
    }, error => {
      console.error('Error fetching student stats:', error);
    });
  }

  goToStudentsProfile(): void {
    this.router.navigate(['/student/profile']);
  }
}
