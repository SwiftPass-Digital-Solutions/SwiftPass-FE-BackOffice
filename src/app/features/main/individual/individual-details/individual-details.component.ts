import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '@core/services/api/documents/document.service';
import { SharedStateService } from '@shared/services/shared-state.service';
import { IndividualService } from '@core/services/api/individuals/individual.service';
import {
  CustomerDetails,
  CustomerDocument,
  CustomerVaultDocument,
} from '@core/interfaces/individuals/customer-details.interface';
import { BusinessInfoDocument } from '@core/interfaces/business/business-info.interface';
import { DeclineModalComponent } from '@shared/components/decline-modal/decline-modal.component';
import { DocumentApproval } from '@core/models/documents/document-approval.model';
import { ToastrService } from 'ngx-toastr';
import { ViewDocumentModalComponent } from '@shared/components/view-document-modal/view-document-modal.component';

@Component({
  selector: 'app-individual-details',
  imports: [CommonModule, ViewDocumentModalComponent, DeclineModalComponent],
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
  customerInfo: CustomerDetails | null = null;
  showDocumentModal = false;
  selectedDocument!: BusinessInfoDocument;
  showDeclineModal: boolean = false;

  currentPage = 1;
  pageSize = 5;
  pageNumber: number = 1;
  totalPages: number = 0;
  filteredDocuments: CustomerDocument[] = [];

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private documentService: DocumentService,
    private individualService: IndividualService,
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
    this.individualService.getIndividualById(this.userId).subscribe(
      (response) => {
        console.log('Customer info:', response);
        this.customerInfo = response.data;
        this.filteredDocuments = response.data.documents;
        this.totalPages = response.data.documents.length / this.pageSize;
        this.goToPage(1);
        //this.customerInfo = response.data.data;
        // You can set other properties as needed
      },
      (error) => {
        console.error('Error fetching document info:', error);
      },
    );
  }

  onApprove() {
    // Handle approval logic here
    this.showDocumentModal = false;
    this.documentService
      .approveOrRejectDocument(this.selectedDocument.documentId?.toString()!, 'Approved', '')
      .subscribe(
        (res) => {
          this.toast.success('Document approved successfully');
        },
        (err: any) => {
          this.toast.error(err?.message || 'Error approving document');
        },
      );
  }

  completeRejection(rejectionReason: string = '') {
    const request = new DocumentApproval();
    request.verificationStatus = 'Rejected';
    request.rejectionRemarks = rejectionReason;
    this.documentService
      .approveOrRejectDocument(
        this.selectedDocument.documentId?.toString() ?? '',
        this.selectedDocument.documentCategory ?? '',
        request,
      )
      .subscribe({
        next: (res) => {
          console.log('Document rejected successfully', res);
          this.toast.success('Document rejected successfully', 'Success');
          this.showDeclineModal = false;
          this.getCustomerInfo();
        },
        error: (err) => {
          console.error('Error rejecting document', err);
          this.toast.error(err?.message, 'Error');
        },
      });
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

  selectCustomerDocument(doc: CustomerDocument) {
    this.selectedDocument = {
      documentId: doc.documentId,
      documentName: doc.documentType,
      documentCategory: doc.documentCategory,
      verificationStatus: doc.verificationStatus,
      documentUrl: '',
      documentSubType: 0,
      subTypeName: doc.documentType,
      rejectionRemarks: '',
    };
    this.showDocumentModal = true;
  }

  selectVaultDocument(doc: CustomerVaultDocument) {
    this.selectedDocument = {
      documentId: doc.id,
      documentName: doc.name,
      documentCategory: 'Vault Document',
      verificationStatus: 'Approved',
      documentUrl: doc.url,
      documentSubType: 0,
      subTypeName: doc.name,
      rejectionRemarks: '',
    };
    this.showDocumentModal = true;
  }

  // openDocumentModal() {
  //   this.showDocumentModal = true;
  // }

  closeDocumentModal() {
    this.showDocumentModal = false;
  }

  onReject() {
    this.showDocumentModal = false;
    this.showDeclineModal = true;
  }

  get pageList(): (number | '...')[] {
    const pages = this.totalPages;
    const cur = this.pageNumber;
    if (pages <= 6) return Array.from({ length: pages }, (_, i) => i + 1);
    const list: (number | '...')[] = [];
    list.push(1);
    if (cur > 3) list.push('...');
    const start = Math.max(2, cur - 1);
    const end = Math.min(pages - 1, cur + 1);
    for (let i = start; i <= end; i++) list.push(i);
    if (cur < pages - 2) list.push('...');
    list.push(pages);
    return list;
  }

  goToPage(p: number) {
    this.pageNumber = p;
    this.filteredDocuments = this.customerInfo?.documents.slice(
      (p - 1) * this.pageSize,
      p * this.pageSize,
    ) as CustomerDocument[];
  }
}
