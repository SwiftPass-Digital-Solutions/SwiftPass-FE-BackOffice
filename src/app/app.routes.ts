import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(m => m.routes)
    },
    {
        path: 'user',
        loadChildren: () => import('./features/user/user.routes').then(m => m.userRoutes)
    }
];
