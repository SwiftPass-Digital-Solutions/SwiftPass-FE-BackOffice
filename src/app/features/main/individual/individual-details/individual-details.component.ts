import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ViewDocumentModalComponent } from './view-document-modal/view-document-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '@core/services/api/documents/document.service';
import { SharedStateService } from '@shared/services/shared-state.service';

@Component({
  selector: 'app-individual-details',
  imports: [CommonModule, ViewDocumentModalComponent],
  templateUrl: './individual-details.component.html',
  styleUrl: './individual-details.component.scss',
})
export class IndividualDetailsComponent {
  activeTab = 'profile';

  documents = [
    { type: 'BVN', status: 'Approved', updated: 'Aug 1, 2025', expiry: 'N/A' },
    { type: 'National ID', status: 'Pending', updated: 'Aug 1, 2025', expiry: 'N/A' },
    { type: 'Voter’s Card', status: 'Rejected', updated: 'Aug 1, 2025', expiry: 'N/A' },
  ];

  spsnUsage = [
    { partner: 'Opay', connected: 'Sep 15, 2025', link: 'https://www.open.opayweb.com' },
    { partner: 'Opay', connected: 'Sep 15, 2025', link: 'https://www.open.opayweb.com' },
  ];

  vaultDocs = ['Nysc Certificate', 'Waec Certificate', 'Transcript', 'B.Sc'];

  userId!: number;
  customerInfo: any;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private sharedStateService: SharedStateService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.userId = params.get('id');
      console.log(params);
      this.getCustomerInfo();
    });

    //this.documentId = Number(this.route.snapshot.paramMap.get('id'));
    // this.route.params.subscribe((params) => {
    //   this.documentId = params['id'] || 0;
    // });

    console.log('Reviewing user ID:', this.userId);
  }

  getCustomerInfo() {
    // Fetch document info using documentId
    this.documentService.getDocumentsByUserId(this.userId).subscribe(
      (response) => {
        console.log('Document info:', response);
        //this.customerInfo = response.data.data;
        // You can set other properties as needed
      },
      (error) => {
        console.error('Error fetching document info:', error);
      },
    );
  }

  badgeClass(status: string) {
    return {
      'text-green-700 bg-green-50 ring-1 ring-green-100': status === 'Approved',
      'text-amber-700 bg-amber-50 ring-1 ring-amber-100': status === 'Pending',
      'text-red-700 bg-red-50 ring-1 ring-red-100': status === 'Rejected',
    };
  }

  dotClass(status: string) {
    return {
      'bg-green-500': status === 'Approved',
      'bg-amber-500': status === 'Pending',
      'bg-red-500': status === 'Rejected',
    };
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onReject() {
    console.log('Document rejected');
    this.isModalOpen = false;
  }
}
