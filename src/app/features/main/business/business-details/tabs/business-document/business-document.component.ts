import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  BusinessInfoDocument,
  BusinessInfoDocumentCategory,
} from '@core/interfaces/business/business-info.interface';
import { BusinessService } from '@core/services/api/business/business.service';
import { ViewDocumentModalComponent } from '@shared/components/view-document-modal/view-document-modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-business-document',
  imports: [CommonModule, ViewDocumentModalComponent],
  templateUrl: './business-document.component.html',
  styleUrl: './business-document.component.scss',
})
export class BusinessDocumentComponent {
  // documentGroups = [
  //   {
  //     name: 'Corporate Registration',
  //     count: 2,
  //     category: '',
  //     documents: [
  //       { name: 'CAC Certificate', status: 'Approved' },
  //       { name: 'CAC Form 1.1', status: 'Pending' },
  //     ],
  //   },
  //   {
  //     name: 'Tax Compliance',
  //     count: 2,
  //     category: '',
  //     documents: [
  //       { name: 'TIN Certificate', status: 'Approved' },
  //       { name: 'VAT Registration', status: 'Rejected' },
  //     ],
  //   },
  //   {
  //     name: 'Director IDs',
  //     count: 2,
  //     category: '',
  //     documents: [
  //       { name: 'Passport (CEO)', status: 'Approved' },
  //       { name: 'NIN (CFO)', status: 'Approved' },
  //     ],
  //   },
  //   {
  //     name: 'Licenses & Others',
  //     count: 2,
  //     category: '',
  //     documents: [
  //       { name: 'SCUML Certificate', status: 'Approved' },
  //       { name: 'Industry License', status: 'Rejected' },
  //     ],
  //   },
  // ];

  showApprovalModal = false;
  @Input() businessId!: number;
  @Input() documentGroups: BusinessInfoDocumentCategory[] = [];
  selectedDocument!: BusinessInfoDocument;

  constructor(
    private businessService: BusinessService,
    private toast: ToastrService,
  ) {}

  selectDeocument(doc: BusinessInfoDocument) {
    this.selectedDocument = doc;
    this.showApprovalModal = true;
  }

  onApprove() {
    // Handle approval logic here
    this.showApprovalModal = false;
    this.businessService
      .approveOrRegectBusiness(this.businessId, this.selectedDocument.documentId!, 'Approved', '')
      .subscribe(
        (res) => {
          this.toast.success('Document approved successfully');
        },
        (err: any) => {
          this.toast.error(err?.message || 'Error approving document');
        },
      );
  }

  onReject() {
    // Handle rejection logic here
    this.showApprovalModal = false;
    this.businessService
      .approveOrRegectBusiness(this.businessId, this.selectedDocument.documentId!, 'Rejected', '')
      .subscribe(
        (res) => {
          this.toast.success('Document rejected successfully');
        },
        (err: any) => {
          this.toast.error(err?.message || 'Error rejecting document');
        },
      );
  }
}
