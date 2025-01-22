import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})  
export class NavbarComponent {
  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = sessionStorage.getItem('credential') ? true : false;
  }

  logout() {
    sessionStorage.removeItem('credential');
    console.log('asdkhasd');
  }
}
