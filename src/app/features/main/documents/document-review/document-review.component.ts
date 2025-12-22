import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApprovalModalComponent } from '@shared/components/approval-modal/approval-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DeclineModalComponent } from '@shared/components/decline-modal/decline-modal.component';
import { DocumentService } from '@core/services/api/documents/document.service';
import { SharedStateService } from '@shared/services/shared-state.service';
import {
  DocumentDetails,
  OtherDocument,
} from '@core/interfaces/documents/document-details.interface';
import { Document } from '@core/interfaces/documents/documents.interface';
import { DocumentApproval } from '@core/models/documents/document-approval.model';

type DocStatus = 'Approved' | 'Pending' | 'Rejected';

@Component({
  selector: 'app-document-review',
  standalone: true,
  imports: [CommonModule, FormsModule, ApprovalModalComponent, DeclineModalComponent],
  templateUrl: './document-review.component.html',
})
export class DocumentReviewComponent implements OnInit {
  toaster = inject(ToastrService);

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

  documentId: number = 0;
  documentOwnerInfo!: Document;
  documentInfo!: DocumentDetails;
  selectedDocumentType!: OtherDocument;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private sharedStateService: SharedStateService,
  ) {}

  ngOnInit(): void {
    this.documentOwnerInfo = this.sharedStateService.selectedDocumentInfo();

    this.route.paramMap.subscribe((params: any) => {
      this.documentId = params.get('id');
      console.log(params);
      this.getDocumentInfo();
    });

    //this.documentId = Number(this.route.snapshot.paramMap.get('id'));
    // this.route.params.subscribe((params) => {
    //   this.documentId = params['id'] || 0;
    // });

    console.log('Reviewing document ID:', this.documentId);
  }

  getDocumentInfo() {
    this.documentService
      .getDocumentsById(this.documentId, this.documentOwnerInfo.documentCategory || '')
      .subscribe(
        (res) => {
          console.log('Document details:', res.data);
          this.documentInfo = res.data;
          const documentToDisplay: OtherDocument = {
            documentId: this.documentInfo.providerDocumentDetails.id,
            userFullName:
              this.documentInfo.providerDocumentDetails.firstName +
              ' ' +
              this.documentInfo.providerDocumentDetails.lastName,
            email: this.documentOwnerInfo.email || '',
            documentType: this.documentInfo.providerDocumentDetails.documentType,
            documentCategory: this.documentInfo.providerDocumentDetails.documentCategory,
            userType: this.documentOwnerInfo.userType,
            verificationStatus: this.documentOwnerInfo.verificationStatus || 'Pending',
            expiryDate: this.documentInfo.providerDocumentDetails.expiryDate,
            documentImageFileUrl: this.documentInfo.providerDocumentDetails.documentImageFileUrl,
          };
          this.selectedDocumentType = documentToDisplay;
          //this.selectDocumentType(this.documentInfo.providerDocumentDetails);
        },
        (err) => {
          console.error('Error fetching document details:', err);
        },
      );
  }

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

  selectDocumentType(d: OtherDocument) {
    this.selectedDocumentType = d;
  }

  // helper to get badge classes
  badgeClass(s: string) {
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

  completeApproval() {
    const request = new DocumentApproval();
    request.verificationStatus = 'Approved';
    this.documentService
      .approveOrRejectDocument(
        this.documentId.toString(),
        this.documentOwnerInfo.documentCategory,
        request,
      )
      .subscribe({
        next: (res) => {
          console.log('Document approved successfully', res);
          this.toaster.success('Document approved successfully', 'Success');
          this.onGoToDocuments();
        },
        error: (err) => {
          console.error('Error approving document', err);
          this.toaster.error(err?.message, 'Error');
        },
      });
  }

  completeRejection(rejectionReason: string) {
    const request = new DocumentApproval();
    request.verificationStatus = 'Rejected';
    request.rejectionRemarks = rejectionReason;
    this.documentService
      .approveOrRejectDocument(
        this.documentId.toString(),
        this.documentOwnerInfo.documentCategory,
        request,
      )
      .subscribe({
        next: (res) => {
          console.log('Document rejected successfully', res);
          this.toaster.success('Document rejected successfully', 'Success');
          this.showDeclinedModal = false;
          this.router.navigate(['/main/documents']);
        },
        error: (err) => {
          console.error('Error rejecting document', err);
          this.toaster.error(err?.message, 'Error');
        },
      });
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
