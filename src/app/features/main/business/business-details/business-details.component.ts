import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BusinessInfoComponent } from './tabs/business-info/business-info.component';
import { BusinessCustomersComponent } from './tabs/business-customers/business-customers.component';
import { BusinessSettingsComponent } from './tabs/business-settings/business-settings.component';
import { BusinessDocumentComponent } from './tabs/business-document/business-document.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '@core/services/api/business/business.service';
import { BusinessInfo } from '@core/interfaces/business/business-info.interface';

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
export class BusinessDetailsComponent implements OnInit {
  tabs = ['Business Details', 'Documents', 'Customers', 'Settings'];
  activeTab = 'Business Details';
  businessId!: number;
  businessInfo!: BusinessInfo

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private businessService: BusinessService,
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: any) => {
      this.businessId = params.get('id');
      console.log(params);
      this.getBusinessInfo();
    });
  }

  getBusinessInfo() {
    // Fetch document info using documentId
    this.businessService.getBusinessById(this.businessId).subscribe(
      (response) => {
        this.businessInfo = response.data;
        console.log('Business info:', response);
      },
      (error) => {
        console.error('Error fetching business info:', error);
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
