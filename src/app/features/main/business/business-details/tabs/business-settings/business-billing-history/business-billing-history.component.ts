import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-business-billing-history',
  imports: [CommonModule],
  templateUrl: './business-billing-history.component.html',
  styleUrl: './business-billing-history.component.scss',
})
export class BusinessBillingHistoryComponent {
  currentPage = 1;
  pages = [1, 2, 3];

  transactions = [
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
