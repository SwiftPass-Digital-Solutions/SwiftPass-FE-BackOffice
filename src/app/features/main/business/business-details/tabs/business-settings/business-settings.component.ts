import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-business-settings',
  imports: [CommonModule],
  templateUrl: './business-settings.component.html',
  styleUrl: './business-settings.component.scss',
})
export class BusinessSettingsComponent {
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
  billing = [
    { amount: '+100,000', type: 'Credit', date: '01 Sep, 2025', time: '03:33 pm' },
    { amount: '+100,000', type: 'Credit', date: '01 Sep, 2025', time: '03:33 pm' },
    { amount: '+100,000', type: 'Credit', date: '01 Sep, 2025', time: '03:33 pm' },
    { amount: '+100,000', type: 'Credit', date: '01 Sep, 2025', time: '03:33 pm' },
    { amount: '-50', type: 'Debit', date: '01 Sep, 2025', time: '03:33 pm' },
    { amount: '-50', type: 'Debit', date: '01 Sep, 2025', time: '03:33 pm' },
    { amount: '-50', type: 'Debit', date: '01 Sep, 2025', time: '03:33 pm' },
    { amount: '+100,000', type: 'Credit', date: '01 Sep, 2025', time: '03:33 pm' },
    { amount: '-50', type: 'Debit', date: '01 Sep, 2025', time: '03:33 pm' },
  ];
}
