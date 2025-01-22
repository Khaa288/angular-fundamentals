import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-user-profile-management',
  imports: [],
  templateUrl: './page-user-profile-management.component.html',
  styleUrl: './page-user-profile-management.component.scss'
})
export class PageUserProfileManagementComponent {
  addProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });
}
