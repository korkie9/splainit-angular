import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    {
      username: 'Justin',
      password: 'password1',
      email: 'justin@korkie.com',
    },
    {
      username: 'Luke',
      password: 'password1',
      email: 'luke@stevens.com',
    },
    {
      username: 'Migali',
      password: 'password1',
      email: 'migali@giagas.com',
    },
    {
      username: 'Amy',
      password: 'password1',
      email: 'amy@hayward.com',
    },
  ];
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    let loggedIn: boolean = false;
    this.users.map((user) => {
      if (
        (user.email.toLocaleLowerCase() === username.toLocaleLowerCase() ||
          user.username.toLocaleLowerCase() === username.toLocaleLowerCase()) &&
        password === user.password
      ) {
        loggedIn = true;
        localStorage.setItem('username', user.username);
      }
    });
    if (loggedIn) {
      this.router.navigate(['games']);
    }
    return loggedIn;
  }
}
