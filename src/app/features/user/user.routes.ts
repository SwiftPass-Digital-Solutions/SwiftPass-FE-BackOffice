import { Routes } from '@angular/router';
import { User } from './user';
import { Overview } from './overview/overview';

export const userRoutes: Routes = [
    {
        path: '',
        component: User,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'overview'
            },
            {
                path: 'overview',
                component: Overview
            }
        ]
    }
];
