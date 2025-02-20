import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.css']
})
export class PasswordsComponent {
  forgotPasswordForm: FormGroup;
  showCodeInput: boolean = false;
  generatedCode: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      verificationCode: ['']
    });
  }

  sendCode() {
    if (this.forgotPasswordForm.get('email')?.valid) {
      // Simulate sending a verification code (For real-world, this would be sent via email)
      this.generatedCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit code
      alert(`Verification Code Sent: ${this.generatedCode}`); // Simulating email sent
      this.showCodeInput = true;
    } else {
      alert('Please enter a valid email address.');
    }
  }

  verifyCode() {
    const enteredCode = this.forgotPasswordForm.get('verificationCode')?.value;
    if (enteredCode === this.generatedCode) {
      alert('Verification Successful! Redirecting to login...');
      this.router.navigate(['/login']); // Redirect to login page
    } else {
      alert('Invalid code. Please try again.');
    }
  }
}