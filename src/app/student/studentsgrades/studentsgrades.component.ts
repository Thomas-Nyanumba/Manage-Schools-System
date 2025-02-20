import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentsgrades',
  templateUrl: './studentsgrades.component.html',
  styleUrls: ['./studentsgrades.component.css']
})
export class studentsgradescomponent implements OnInit {
  students: any[] = [];
  filteredStudents: any[] = [];
  selectedForm: string = "";
  selectedStream: string = "";
  updateMessage: string = "";
  forms = ["Form 1", "Form 2", "Form 3", "Form 4"];
  streams = ["East", "West"];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch students from db.json when component loads
    this.http.get<any[]>('http://localhost:3001/students').subscribe(data => {
      this.students = data;
    });
  }

  // Filter students based on selected form & stream
  filterStudents(): void {
    if (this.selectedForm && this.selectedStream) {
      this.filteredStudents = this.students.filter(student =>
        student.FormEnrollingInto === this.selectedForm &&
        student.Stream === this.selectedStream
      );
    } else {
      this.filteredStudents = [];
    }
  }

  // Update student grade
  updateGrade(student: any): void {
    if (!student.newGrade || student.newGrade.trim() === '') {
      alert("Please enter a grade before updating.");
      return;
    }

    const updatedStudent = { ...student, Grade: student.newGrade };

    this.http.put(`http://localhost:3001/students/${student.id}`, updatedStudent)
      .subscribe(() => {
        this.updateMessage = `Grade for ${student.StudentName} updated successfully!`;
        setTimeout(() => (this.updateMessage = ""), 3000);
      });
  }
  updateHobbies(student: any): void {
    if (!student.Hobbies || student.Hobbies.trim() === '') {
      alert("Please enter a grade before updating.");
      return;
    }

    const updatedStudent = { ...student, Hobbies: student.Hobbies };

    this.http.put(`http://localhost:3001/students/${student.id}`, updatedStudent)
      .subscribe(() => {
        this.updateMessage = `Hobbies for ${student.StudentName} updated successfully!`;
        setTimeout(() => (this.updateMessage = ""), 3000);
      });
}}
