import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordVisible = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
      .then(response => response.json())
      .then(users => {
        if (users.length > 0) {
          alert('Login successful!');
          this.router.navigate(['/studentdashboard']);
        } else {
          alert('Invalid email or password.');
        }
      })
      .catch(error => console.error('Login error:', error));
    }
  }
}


