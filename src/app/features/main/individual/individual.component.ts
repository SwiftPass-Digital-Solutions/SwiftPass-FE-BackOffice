import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-individual',
  imports: [CommonModule, RouterModule],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss',
})
export class IndividualComponent {
  users = [
    {
      name: 'Chinonso Eze',
      email: 'chinonso.eze@domain.com',
      status: 'Approved',
      spsn: 'SWP-2934',
      docs: '8/8',
      docType: 'NIN',
      date: 'Sep 15, 2025',
    },
    {
      name: 'Nneka Ibe',
      email: 'nneka.ibe@domain.com',
      status: 'Awaiting Review',
      spsn: 'N/A',
      docs: '1/8',
      docType: 'CAC Certificate',
      date: 'Sep 15, 2025',
    },
    {
      name: 'Emeka Obi',
      email: 'emeka.obi@domain.com',
      status: 'Rejected',
      spsn: 'N/A',
      docs: '4/8',
      docType: 'SCUML Certificate',
      date: 'Sep 15, 2025',
    },
  ];

  constructor(private router: Router) {}
  badgeClass(status: string) {
    return {
      'text-green-700 bg-green-50 ring-1 ring-green-100': status === 'Approved',
      'text-amber-700 bg-amber-50 ring-1 ring-amber-100':
        status === 'Awaiting Review' || status === 'Pending',
      'text-red-700 bg-red-50 ring-1 ring-red-100': status === 'Rejected',
    };
  }

  dotClass(status: string) {
    return {
      'bg-green-500': status === 'Approved',
      'bg-amber-500': status === 'Awaiting Review' || status === 'Pending',
      'bg-red-500': status === 'Rejected',
    };
  }

  goToDetails(id: number) {
    this.router.navigateByUrl(`/main/individuals/${id}`);
  }
}
