import { Routes } from '@angular/router';
import { PageLoginComponent } from './features/authentication/page-login/page-login.component';
import { PageUserProfileComponent } from './features/user-profile/page-user-profile/page-user-profile.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const AppName = "Angular Fundamentals";

export const routes: Routes = [
    { path: '', title: `${AppName} • Login`, component: PageLoginComponent },
    { path: 'login', title: `${AppName} • Login`, component: PageLoginComponent },
    { path: 'user', title: `${AppName} • User Profile`, component: PageUserProfileComponent },
    { path: '**', title: `${AppName} • NotFound`, component: PageNotFoundComponent }
];
