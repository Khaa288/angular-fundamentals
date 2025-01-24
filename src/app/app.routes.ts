import { Routes } from '@angular/router';
import { PageLoginComponent } from './features/authentication/page-login/page-login.component';
import { PageUserProfileComponent } from './features/user-profile/page-user-profile/page-user-profile.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { PageUserProfileSearchComponent } from './features/user-profile/page-user-profile-search/page-user-profile-search.component';
import { PageUserProfileDetailComponent } from './features/user-profile/page-user-profile-detail/page-user-profile-detail.component';
import { PageUserProfileManagementComponent } from './features/user-profile/page-user-profile-management/page-user-profile-management.component';

const AppName = "Angular Fundamentals";

export const routes: Routes = [
    { path: '', title: `${AppName} • Login`, component: PageLoginComponent },
    { path: 'login', title: `${AppName} • Login`, component: PageLoginComponent },
    { path: 'user', title: `${AppName} • User Profile`, component: PageUserProfileComponent },
    { path: 'user/management', title: `${AppName} • User Profile Management`, component: PageUserProfileManagementComponent },
    {
        path: 'user/:id',
        title: `${AppName} • User Profile Detail`,
        children: [
            {
                path: 'detail',
                title: `${AppName} • User Profile Detail`, 
                component: PageUserProfileDetailComponent
            },
            {
                path: 'search',
                title: `${AppName} • User Profile Search`, 
                component: PageUserProfileSearchComponent
            }
        ]
    },
    {
        path: 'lazy', loadComponent: () => import('./shared/components/lazy/lazy.component').then(c => c.LazyComponent)
    },
    {
        path: 'signal', loadComponent: () => import('./shared/components/signal/signal.component').then(c => c.SignalComponent)
    },
    { path: '**', title: `${AppName} • NotFound`, component: PageNotFoundComponent }
];
