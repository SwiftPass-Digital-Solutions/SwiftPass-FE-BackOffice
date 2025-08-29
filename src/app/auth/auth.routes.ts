import { Routes } from '@angular/router';
import { Auth } from './auth';

export const routes: Routes = [
    {
        path: '',
        component: Auth,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                loadComponent: () => import('./login/login').then(m => m.Login)
            },
            {
                path: 'register',
                loadComponent: () => import('./register/register').then(m => m.Register)
            },
            {
                path: 'otp',
                loadComponent: () => import('./otp/otp').then(m => m.Otp)
            }
        ]
    }
];
