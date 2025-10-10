import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-business-document',
  imports: [CommonModule],
  templateUrl: './business-document.component.html',
  styleUrl: './business-document.component.scss',
})
export class BusinessDocumentComponent {
  documentGroups = [
    {
      name: 'Corporate Registration',
      count: 2,
      category: '',
      documents: [
        { name: 'CAC Certificate', status: 'Approved' },
        { name: 'CAC Form 1.1', status: 'Pending' },
      ],
    },
    {
      name: 'Tax Compliance',
      count: 2,
      category: '',
      documents: [
        { name: 'TIN Certificate', status: 'Approved' },
        { name: 'VAT Registration', status: 'Rejected' },
      ],
    },
    {
      name: 'Director IDs',
      count: 2,
      category: '',
      documents: [
        { name: 'Passport (CEO)', status: 'Approved' },
        { name: 'NIN (CFO)', status: 'Approved' },
      ],
    },
    {
      name: 'Licenses & Others',
      count: 2,
      category: '',
      documents: [
        { name: 'SCUML Certificate', status: 'Approved' },
        { name: 'Industry License', status: 'Rejected' },
      ],
    },
  ];
}
