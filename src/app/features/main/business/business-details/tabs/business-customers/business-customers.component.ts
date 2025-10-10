import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-business-customers',
  imports: [CommonModule],
  templateUrl: './business-customers.component.html',
  styleUrl: './business-customers.component.scss',
})
export class BusinessCustomersComponent {
  customers = [
    {
      name: 'Chinonso Eze',
      email: 'chinonso.eze@domain.com',
      spsn: 'SWP-2931',
      onboardedOn: 'Aug 5, 2025',
    },
    {
      name: 'Nneka Ibe',
      email: 'nneka.ibe@domain.com',
      spsn: 'SWP-2931',
      onboardedOn: 'Aug 5, 2025',
    },
    {
      name: 'Emeka Obi',
      email: 'emeka.obi@domain.com',
      spsn: 'SWP-2931',
      onboardedOn: 'Aug 5, 2025',
    },
    {
      name: 'Tolu Adebayo',
      email: 'tolu.adebayo@domain.com',
      spsn: 'SWP-2931',
      onboardedOn: 'Aug 5, 2025',
    },
    {
      name: 'Kemi Adeola',
      email: 'kemi.adeola@domain.com',
      spsn: 'SWP-2931',
      onboardedOn: 'Aug 5, 2025',
    },
    {
      name: 'Tunde Balogun',
      email: 'tunde.balogun@domain.com',
      spsn: 'SWP-2931',
      onboardedOn: 'Aug 5, 2025',
    },
    {
      name: 'Oluwaseun Afolabi',
      email: 'oluwaseun.afolabi@domain.com',
      spsn: 'SWP-2931',
      onboardedOn: 'Aug 5, 2025',
    },
    {
      name: 'Ifeoma Nwankwo',
      email: 'ifeoma.nwankwo@domain.com',
      spsn: 'SWP-2931',
      onboardedOn: 'Aug 5, 2025',
    },
  ];
}
