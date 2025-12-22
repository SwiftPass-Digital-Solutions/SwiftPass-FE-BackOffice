import { Routes } from '@angular/router';
import { Auth } from './auth';
import { Login } from './login/login';
import { Otp } from './otp/otp';

export const routes: Routes = [
  {
    path: '',
    component: Auth,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        component: Login,
      },
    ],
  },
];
