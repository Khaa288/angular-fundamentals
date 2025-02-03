import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from './services/validation/validation.service';
import { AuthenticationService } from './services/authentication.service';


@Component({
  selector: 'page-login',
  imports: [ReactiveFormsModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent {
  loginFormGroup: FormGroup;

  constructor(
    private readonly validationService: ValidationService,
    private readonly authencationService: AuthenticationService
  ) {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', [validationService.validateUsername()]),
      password: new FormControl('', [validationService.validatePassword()])
    });
  }

  onLoginFormSubmit() { 
    sessionStorage.setItem('credential', this.loginFormGroup.value);
    this.authencationService.updateUpdateLoginState();
  }
}
