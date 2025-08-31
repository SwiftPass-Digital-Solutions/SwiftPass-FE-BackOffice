import { Routes } from '@angular/router';
import { Auth } from './auth';
import { Login } from './login/login';
import { Otp } from './otp/otp';
import { Register } from './register/register';
import { CompleteRegistration } from './complete-registration/complete-registration';

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
                component: Login
            },
            {
                path: 'otp/:trackingId',
                component: Otp
            },
            {
                path: 'register',
                component: Register
            },
            {
                path: 'complete-registration',
                component: CompleteRegistration
            }
        ]
    }
];
