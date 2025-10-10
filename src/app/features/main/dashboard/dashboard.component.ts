import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  ranges = ['Today', 'Last 7 Days', 'Last 30 Days', 'All Time', 'Custom Range'];
  activeRange = 'Today';
  selectRange(r: string) {
    this.activeRange = r;
  }

  stats = [
    {
      icon: 'user',
      title: 'Verified Individuals',
      value: '112,097',
      change: 20,
      changeNote: 'this month',
    },
    { icon: 'business', title: 'Verified Businesses', value: '2,342', change: 10, changeNote: '' },
    { icon: 'user', title: 'Pending Documents', value: '345', change: -10, changeNote: '' },
    { icon: 'business', title: 'Total SPSN Calls', value: '5', change: 8, changeNote: '' },
  ];

  activities = [
    {
      status: 'Approved',
      message: 'NIN was approved for Samuel Adeyemi',
      user: 'Emeka Obasi',
      time: '10 minutes ago',
    },
    {
      status: 'Rejected',
      message: 'Utility Bill was rejected for Tunde Bakare',
      user: 'Zainab Ibrahim',
      time: '15 minutes ago',
    },
    {
      status: 'Approved',
      message: 'Driver’s License was approved for Ngozi Chukwu',
      user: 'Emeka Obasi',
      time: '20 minutes ago',
    },
    {
      status: 'Approved',
      message: 'International Passport was approved for Olabisi Afolabi',
      user: 'Khalid Musa',
      time: '25 minutes ago',
    },
    {
      status: 'Approved',
      message: 'CAC was approved for Acme Ltd',
      user: 'Chinedu Ijeoma',
      time: '30 minutes ago',
    },
    {
      status: 'Rejected',
      message: 'Certificate of Incorporation was rejected for Acme Ltd',
      user: 'Khalid Musa',
      time: '35 minutes ago',
    },
  ];
}
