import { Routes } from '@angular/router';
import { User } from './user';
import { Dashboard } from './dashboard/dashboard';

export const userRoutes: Routes = [
    {
        path: '',
        component: User,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: Dashboard
            }
        ]
    }
];
