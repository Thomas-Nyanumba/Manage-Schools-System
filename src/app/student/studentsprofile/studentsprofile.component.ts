import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students-profile',
  templateUrl: './studentsprofile.component.html',
  styleUrls: ['./studentsprofile.component.css']
})
export class StudentsProfileComponent implements OnInit {
  students: any[] = [];
  apiUrl = 'http://localhost:3001/students'; // JSON Server URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.students = data;
    });
  }
  editMode = false;
selectedStudent: any = {};

editStudent(student: any) {
  this.selectedStudent = { ...student }; // Copy student data
  this.editMode = true;
}
updateStudent() {
  this.http.put(`${this.apiUrl}/${this.selectedStudent.id}`, this.selectedStudent)
    .subscribe(() => {
      this.fetchStudents(); // Refresh the student list
      this.editMode = false; // Exit edit mode
    });
}
deleteStudent(id: string) {
  if (confirm("Are you sure you want to delete this student?")) {
    this.http.delete(`${this.apiUrl}/${id}`)
      .subscribe(() => {
        this.fetchStudents(); // Refresh the list
      });

}}}
