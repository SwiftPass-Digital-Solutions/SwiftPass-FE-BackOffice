import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-business-api-requests',
  imports: [CommonModule],
  templateUrl: './business-api-requests.component.html',
  styleUrl: './business-api-requests.component.scss',
})
export class BusinessApiRequestsComponent {
  currentPage = 1;
  pages = [1, 2, 3];

  apiRequests = [
    {
      endpoint: '/api/v1/verify',
      spsn: 'SWP-2934',
      status: 'Success',
      message: 'Invalid BVN',
      date: '01 Sep, 2025',
      time: '03:33 pm',
    },
    {
      endpoint: '/api/v1/user-data',
      spsn: 'SWP-2939',
      status: 'Failed',
      message: '245,482',
      date: '01 Sep, 2025',
      time: '03:33 pm',
    },
    {
      endpoint: '/api/v1/verify',
      spsn: 'SWP-2942',
      status: 'Failed',
      message: '524,076',
      date: '01 Sep, 2025',
      time: '03:33 pm',
    },
    {
      endpoint: '/api/v1/verify',
      spsn: 'SWP-2945',
      status: 'Approved',
      message: '489,984',
      date: '01 Sep, 2025',
      time: '03:33 pm',
    },
    {
      endpoint: '/api/v1/user-data',
      spsn: 'SWP-2948',
      status: 'Failed',
      message: '345,670',
      date: '01 Sep, 2025',
      time: '03:33 pm',
    },
    {
      endpoint: '/api/v1/verify',
      spsn: 'SWP-2951',
      status: 'Failed',
      message: '388,332',
      date: '01 Sep, 2025',
      time: '03:33 pm',
    },
    {
      endpoint: '/api/v1/verify',
      spsn: 'SWP-2954',
      status: 'Approved',
      message: '827,982',
      date: '01 Sep, 2025',
      time: '03:33 pm',
    },
    {
      endpoint: '/api/v1/verify',
      spsn: 'SWP-2957',
      status: 'Failed',
      message: '9,283',
      date: '01 Sep, 2025',
      time: '03:33 pm',
    },
    {
      endpoint: '/api/v1/verify',
      spsn: 'SWP-2960',
      status: 'Approved',
      message: '293',
      date: '01 Sep, 2025',
      time: '03:33 pm',
    },
  ];
}
