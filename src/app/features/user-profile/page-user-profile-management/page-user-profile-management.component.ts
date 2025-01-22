import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-user-profile-management',
  imports: [ReactiveFormsModule],
  templateUrl: './page-user-profile-management.component.html',
  styleUrl: './page-user-profile-management.component.scss'
})
export class PageUserProfileManagementComponent {
  profileForm: FormGroup;
  profileFormUsingBuilder: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
    });
  
    this.profileFormUsingBuilder = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
  }

  onProfileFormSubmit() {
    console.log(this.profileForm.value);
  }

  onProfileFormBuilderSubmit() {
    console.log(this.profileFormUsingBuilder.value);
  }
}
