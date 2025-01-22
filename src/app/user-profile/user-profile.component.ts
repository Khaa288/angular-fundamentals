import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [RouterOutlet],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  userName = "pro_programmer_123";
  isValidUserId = true;

  disableAll() {
    this.userName = this.isValidUserId ? "disabled-user" : "pro_programmer_123";
    this.isValidUserId = !this.isValidUserId;
  }
}
