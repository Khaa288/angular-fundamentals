import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from './services/validation.service';

@Component({
  selector: 'page-login',
  imports: [ReactiveFormsModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent {
  loginFormGroup: FormGroup;

  constructor(private readonly validationService: ValidationService) {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', [validationService.validateUsername()]),
      password: new FormControl('', [validationService.validatePassword()])
    });
  }

  onLoginFormSubmit() { 
    console.log(this.loginFormGroup.value);
  }
}
