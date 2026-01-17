import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Business } from '@core/interfaces/business/business.interface';
import { BusinessService } from '@core/services/api/business/business.service';

@Component({
  selector: 'app-business',
  imports: [CommonModule, FormsModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
})
export class BusinessComponent implements OnInit {
  searchTerm = '';
  currentPage = 1;
  pageSize = 10;
  pages = [1, 2, 3, 4, 5];

  // businesses = [
  //   {
  //     name: 'FirstBank Nigeria',
  //     email: 'admin@firstbank.com',
  //     status: 'Approved',
  //     customers: 4076,
  //     credit: 500000,
  //     onboarded: 'Jan 15, 2024',
  //   },
  //   {
  //     name: 'Paystack',
  //     email: 'integration@paystack.com',
  //     status: 'Awaiting Review',
  //     customers: 49984,
  //     credit: 245482,
  //     onboarded: 'Sep 15, 2025',
  //   },
  //   {
  //     name: 'FinTrust Ltd',
  //     email: 'support@fintrust.com',
  //     status: 'Rejected',
  //     customers: 9283,
  //     credit: 524076,
  //     onboarded: 'Sep 15, 2025',
  //   },
  //   {
  //     name: 'Tolu Adebayo',
  //     email: 'tolu.adebayo@domain.com',
  //     status: 'Approved',
  //     customers: 293,
  //     credit: 489984,
  //     onboarded: 'Sep 15, 2025',
  //   },
  //   {
  //     name: 'Kemi Adeola',
  //     email: 'kemi.adeola@domain.com',
  //     status: 'Approved',
  //     customers: 25482,
  //     credit: 345670,
  //     onboarded: 'Sep 15, 2025',
  //   },
  // ];

  businesses: Business[] = [];
  selectedStatus: string = '';

  constructor(
    private router: Router,
    private businessService: BusinessService,
  ) {}

  ngOnInit(): void {
    this.getBusinesses();
  }

  getBusinesses() {
    this.businessService
      .getBusinesses(this.selectedStatus, this.searchTerm, this.currentPage, this.pageSize)
      .subscribe(
        (response) => {
          console.log(response);
          this.businesses = response.data.data;
        },
        (err) => {
          console.error(err);
        },
      );
  }

  goToDetails(businessId: number) {
    // Navigate to business details page
    this.router.navigate(['/main/businesses', businessId]);
  }
}
