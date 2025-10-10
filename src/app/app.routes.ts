import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.routes),
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.routes').then((m) => m.userRoutes),
  },
  {
    path: 'main',
    loadChildren: () => import('./features/main/main.routes').then((m) => m.mainRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
