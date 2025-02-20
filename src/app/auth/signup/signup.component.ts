import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  roles: string[] = ['Teacher', 'Student', 'Admin'];

  constructor(private fb: FormBuilder, private router: Router) {  // Inject Router
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      console.log('User registered:', userData);

      // ✅ Store user data in JSON Server (db.json)
      fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('User saved:', data);
        alert('Account created successfully!');
        
        // ✅ Redirect to login page
        this.router.navigate(['/login']);
      })
      .catch(error => console.error('Signup error:', error));
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}