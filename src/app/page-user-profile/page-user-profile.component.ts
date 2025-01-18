import { Component } from '@angular/core';

@Component({
  selector: 'app-page-page-user-profile',
  imports: [],
  templateUrl: './page-user-profile.component.html',
  styleUrl: './page-user-profile.component.scss'
})
export class PageUserProfileComponent {
  userName = "pro_programmer_123";
  isValidUserId = true;

  disableAll() {
    this.userName = this.isValidUserId ? "disabled-user" : "pro_programmer_123";
    this.isValidUserId = !this.isValidUserId;
  }
}
