import { Component } from '@angular/core';
import { ApiService } from '../../../core/services/api-service/api.service';
import { UserProfile } from '../../../core/models/user-profile';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-page-user-profile',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './page-user-profile.component.html',
  styleUrl: './page-user-profile.component.scss'
})
export class PageUserProfileComponent {
  users : Observable<UserProfile[]> | undefined;
  userName = "pro_programmer_123";
  isValidUserId: boolean = true;
  selectedId: number = 1;

  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.users = this.apiService.getUsers();
  }

  goToProfileDetail(userId: number) {
    this.router.navigate([`./user/${userId}/detail`]);
  }

  goToProfileManagement() {
    this.router.navigate([`./user/management`]);
  }

  disableAll() {
    this.userName = this.isValidUserId ? "disabled-user" : "pro_programmer_123";
    this.isValidUserId = !this.isValidUserId;
  }
}
