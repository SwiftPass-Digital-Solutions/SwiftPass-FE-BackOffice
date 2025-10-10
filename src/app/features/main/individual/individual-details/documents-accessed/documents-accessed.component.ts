import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-documents-accessed',
  imports: [CommonModule],
  templateUrl: './documents-accessed.component.html',
  styleUrl: './documents-accessed.component.scss',
})
export class DocumentsAccessedComponent {
  documents = [
    { name: 'Signature', fileType: 'PNG', dateAccessed: 'Aug 1, 2025' },
    { name: 'Passport photo', fileType: 'PNG', dateAccessed: 'Aug 1, 2025' },
    { name: 'NIN', fileType: 'TXT', dateAccessed: 'Aug 1, 2025' },
    { name: 'BVN', fileType: 'TXT', dateAccessed: 'Aug 1, 2025' },
  ];

  goBack() {
    console.log('Back clicked');
    // your routing logic, e.g. this.router.navigate(['/dashboard']);
  }
}
