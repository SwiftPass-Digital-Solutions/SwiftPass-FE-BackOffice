import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BusinessInfoComponent } from './tabs/business-info/business-info.component';
import { BusinessCustomersComponent } from './tabs/business-customers/business-customers.component';
import { BusinessSettingsComponent } from './tabs/business-settings/business-settings.component';
import { BusinessDocumentComponent } from './tabs/business-document/business-document.component';

@Component({
  selector: 'app-business-details',
  imports: [
    CommonModule,
    BusinessInfoComponent,
    BusinessCustomersComponent,
    BusinessSettingsComponent,
    BusinessDocumentComponent,
  ],
  templateUrl: './business-details.component.html',
  styleUrl: './business-details.component.scss',
})
export class BusinessDetailsComponent {
  tabs = ['Business Details', 'Documents', 'Customers', 'Settings'];
  activeTab = 'Business Details';

  goBack() {
    console.log('Back clicked');
  }
}
