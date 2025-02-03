import { Component, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../features/authentication/page-login/services/authentication.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})  
export class NavbarComponent {
  isLoggedIn: WritableSignal<boolean>;

  constructor(private readonly authenticationService: AuthenticationService) {
    this.isLoggedIn = authenticationService.isLoggedIn;
  }

  logout() {
    sessionStorage.removeItem('credential');
    this.authenticationService.updateUpdateLoginState();
  }
}
