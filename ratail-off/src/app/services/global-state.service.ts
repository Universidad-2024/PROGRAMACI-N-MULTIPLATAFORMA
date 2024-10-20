import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private _isLoggedIn = false;
  private _user = {
    name: '',
    email: '',
    password: ''
  };

  private _users: { name: string; email: string; password: string }[] = [
    {
      name: 'bryan',
      email: 'blopez@live.cl',
      password: '123456'
    }
  ];

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  get user(): { name: string; email: string, password: string } {
    return this._user;
  }

  set user(value: { name: string; email: string, password: string }) {
    this._user = value;
  }

  constructor() { }

  login(user: { email: string, password: string }) {
    const foundUser = this._users.find(u => u.email === user.email && u.password === user.password);
    if (foundUser) {
      this._isLoggedIn = true;
      this._user = foundUser;
    } else {
      throw new Error('User not found or incorrect password');
    }
  }

  logout() {
    this._isLoggedIn = false;
    this._user = { name: '', email: '', password: '' };
  }

  register(user: { name: string; email: string, password: string }) {
    const userExists = this._users.some(u => u.email === user.email);
    if (userExists) {
      throw new Error('User already exists');
    } else {
      this._users.push(user);
      this._isLoggedIn = true;
      this._user = user;
    }
  }
}