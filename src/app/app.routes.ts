import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'user', component: UserProfileComponent },
    { path: 'login', component: LoginComponent }
];
