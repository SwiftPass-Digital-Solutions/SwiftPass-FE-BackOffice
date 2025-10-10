import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApprovalModalComponent } from '@shared/components/approval-modal/approval-modal.component';
import { Router } from '@angular/router';
import { DeclineModalComponent } from '@shared/components/decline-modal/decline-modal.component';

type DocStatus = 'Approved' | 'Pending' | 'Rejected';

@Component({
  selector: 'app-document-review',
  standalone: true,
  imports: [CommonModule, FormsModule, ApprovalModalComponent, DeclineModalComponent],
  templateUrl: './document-review.component.html',
})
export class DocumentReviewComponent {
  showApprovedModal = false;
  showDeclinedModal = false;

  // header / user info
  userEmail = 'Adaobi.Okafor@gmail.com';

  // Bio card
  bio = {
    name: 'Adaobi Okafor',
    spsn: 'SWP-2931',
    onboarded: 'Aug 5, 2025 via Payline',
  };

  // other submitted documents
  otherDocs = [
    { name: 'BVN', status: 'Approved' as DocStatus },
    { name: 'Passport', status: 'Pending' as DocStatus },
  ];

  // NIN details + preview
  nin = {
    name: 'Adaobi Okafor',
    phone: '09037462656',
    idNumber: '70037462656',
    status: 'Pending' as DocStatus,
    uploadDate: '2025-08-10',
    expiryDate: '2025-10-10',
    // replace with your actual asset or API url; add sample image to assets/
    imageUrl: 'assets/sample-nin.png',
  };

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  onGoToDocuments() {
    this.showApprovedModal = false;
    // navigate to documents
    this.router.navigate(['/main/documents']);
  }
  goBack() {
    this.location.back();
  }

  // download preview image (simple client-side download)
  downloadFile() {
    if (!this.nin.imageUrl) return;
    const link = document.createElement('a');
    link.href = this.nin.imageUrl;
    link.download = `nin-${this.nin.idNumber || 'document'}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  // helper to get badge classes
  badgeClass(s: DocStatus) {
    return {
      'bg-green-50 text-green-700': s === 'Approved',
      'bg-amber-50 text-amber-700': s === 'Pending',
      'bg-red-50 text-red-700': s === 'Rejected',
    };
  }

  // action handlers (wire to APIs)
  approve() {
    this.showApprovedModal = true;
    // add real API call here
    console.log('approve');
  }

  reject() {
    this.showDeclinedModal = true;
    // add real API call here
    console.log('reject');
  }

  // badgeClass(status: string) {
  //   return {
  //     'text-green-700 bg-green-50 ring-green-100': status === 'Approved',
  //     'text-amber-700 bg-amber-50 ring-amber-100': status === 'Pending',
  //     'text-red-700 bg-red-50 ring-red-100': status === 'Rejected',
  //   };
  // }

  viewOtherDoc(d: any) {
    /* open doc viewer */
  }
  viewPhoto() {
    /* open photo */
  }

  dotClass(status: string) {
    return {
      'bg-green-500': status === 'Approved',
      'bg-amber-500': status === 'Pending',
      'bg-red-500': status === 'Rejected',
    };
  }
}
