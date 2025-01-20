import { Component } from '@angular/core';
import { ApiServiceService } from '../../../core/services/api-service/api-service.service';
import { UserProfile } from '../../../core/models/user-profile';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'page-page-user-profile',
  imports: [CommonModule, RouterLink],
  templateUrl: './page-user-profile.component.html',
  styleUrl: './page-user-profile.component.scss'
})
export class PageUserProfileComponent {
  users : UserProfile[] = [];
  userName = "pro_programmer_123";
  isValidUserId = true;

  constructor(private apiService: ApiServiceService) {
    this.users = this.apiService.getUsers();

    console.log(this.users);
  }

  disableAll() {
    this.userName = this.isValidUserId ? "disabled-user" : "pro_programmer_123";
    this.isValidUserId = !this.isValidUserId;
  }
}
