import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
        Validators.maxLength(16),
      ]),
      confirmPassword: new FormControl('', [
        Validators.maxLength(16),
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  get username(): AbstractControl | null {
    return this.signupForm.get('username');
  }
  get email(): AbstractControl | null {
    return this.signupForm.get('email');
  }
  get password(): AbstractControl | null {
    return this.signupForm.get('password');
  }
  get confirmPassword(): AbstractControl | null {
    return this.signupForm.get('confirmPassword');
  }
  signUp(): void{
    const user: User = {
      email: this.email?.value,
      username: this.username?.value,
      password: this.password?.value
    }
    console.log(JSON.stringify(user))
  }

}
