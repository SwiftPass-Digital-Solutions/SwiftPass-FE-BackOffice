import { Routes } from '@angular/router';
import { Main } from './main';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentReviewComponent } from './documents/document-review/document-review.component';
import { IndividualComponent } from './individual/individual.component';
import { IndividualDetailsComponent } from './individual/individual-details/individual-details.component';
import { BusinessComponent } from './business/business.component';
import { BusinessDetailsComponent } from './business/business-details/business-details.component';
import { AuditComponent } from './audit/audit.component';
import { TeamManagementComponent } from './team-management/team-management.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'documents',
        component: DocumentsComponent,
      },
      {
        path: 'documents/:id',
        component: DocumentReviewComponent,
      },
      {
        path: 'individuals',
        component: IndividualComponent,
      },
      {
        path: 'individuals/:id',
        component: IndividualDetailsComponent,
      },
      {
        path: 'businesses',
        component: BusinessComponent,
      },
      {
        path: 'businesses/:id',
        component: BusinessDetailsComponent,
      },
      {
        path: 'audit',
        component: AuditComponent,
      },
      {
        path: 'team',
        component: TeamManagementComponent,
      },
    ],
  },
];
