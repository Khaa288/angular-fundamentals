import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = signal(false);

  constructor() { }

  updateUpdateLoginState() {
    this.isLoggedIn.set(sessionStorage.getItem('credential') ? true : false)
  }
}
