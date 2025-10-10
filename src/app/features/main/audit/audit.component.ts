import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-audit',
  imports: [CommonModule],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss',
})
export class AuditComponent {
  currentPage = 1;
  pages = [1, 2, 3];

  auditLogs = [
    {
      action: 'Approved Document',
      target: 'emeka.obi@domain.com',
      module: 'Documents',
      user: 'Chinonso Eze',
      date: '01 Sep, 2025',
      time: '03:33 pm',
      ip: '203.45.67.89',
      expanded: false,
    },
    {
      action: 'Invited new User',
      target: 'nneka.ibe@domain.com',
      module: 'Team management',
      user: 'Chinonso Eze',
      date: '01 Sep, 2025',
      time: '03:33 pm',
      ip: '192.168.1.100',
      expanded: false,
    },
    {
      action: 'Onboard a Business',
      target: 'app@domain.com',
      module: 'Businesses',
      user: 'Kemi Adeola',
      date: '01 Sep, 2025',
      time: '03:33 pm',
      ip: '203.45.67.89',
      expanded: false,
    },
    {
      action: 'Onboard a Business',
      target: 'app@domain.com',
      module: 'Businesses',
      user: 'Ifeoma Nwankwo',
      date: '01 Sep, 2025',
      time: '03:33 pm',
      ip: '203.45.67.89',
      expanded: false,
    },
    {
      action: 'Onboard a Business',
      target: 'app@domain.com',
      module: 'Businesses',
      user: 'Tunde Balogun',
      date: '01 Sep, 2025',
      time: '03:33 pm',
      ip: '192.168.1.100',
      expanded: false,
    },
  ];
}
