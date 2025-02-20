import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students-enrollment',
  templateUrl: './studentsenrollment.component.html',
  styleUrls: ['./studentsenrollment.component.css']
})
export class StudentsEnrollmentComponent implements OnInit {
  enrollmentForm!: FormGroup;
  private apiUrl = 'http://localhost:3001/students';  // ✅ JSON Server URL

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.enrollmentForm = this.fb.group({
      StudentName: ['', Validators.required],
      StudentID: ['', Validators.required],
      DateofBirth: ['', Validators.required],
      FormEnrollingInto: ['', Validators.required],
      Stream: ['', Validators.required],
      NextofKin : ['', Validators.required],
      PhoneNumber: ['', Validators.required]


    });
  }

  onSubmit(): void {
    if (this.enrollmentForm.valid) {
      console.log('Submitting:', this.enrollmentForm.value);

      this.http.post(this.apiUrl, this.enrollmentForm.value).subscribe(response => {
        console.log('Student Enrolled:', response);
        this.enrollmentForm.reset(); // Clear form after submission
      }, error => {
        console.error('Error:', error);
      });
    }
  }
}