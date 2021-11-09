import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: string;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.minLength(2),
          Validators.required,
          Validators.maxLength(25),
        ],
      ],
      password: [
        '',
        [
          Validators.minLength(2),
          Validators.required,
          Validators.maxLength(25),
        ],
      ],
    });
  }
  get username(): AbstractControl | null {
    return this.loginForm.get('username');
  }
  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  login(): boolean {
    const username = this.username?.value;
    const password = this.password?.value;
    const loggedIn = this.authService.login(username, password);
    if (!loggedIn) this.errorMessage = 'Username or password is incorrect';
    return loggedIn;
  }
}
