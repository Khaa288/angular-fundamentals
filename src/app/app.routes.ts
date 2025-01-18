import { Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageUserProfileComponent } from './page-user-profile/page-user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: PageLoginComponent },
    { path: 'user', component: PageUserProfileComponent },
    { path: 'login', component: PageLoginComponent },
    { path: '**', component: PageNotFoundComponent }
];
