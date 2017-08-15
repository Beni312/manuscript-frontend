import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './services/authentication.service';
import {GuardComponent} from './guard/index';
import {homeRoutes} from './home/home.router';

export const router: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'services', component: AuthenticationService},
    {
        path: 'home',
        canActivate: [GuardComponent],
        children: [
            ...homeRoutes
        ]
    },

    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
