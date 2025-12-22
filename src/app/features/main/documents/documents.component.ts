import { SharedStateService } from './../../../shared/services/shared-state.service';
import { DocumentService } from './../../../core/services/api/documents/document.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Document } from '@core/interfaces/documents/documents.interface';
type DocStatus = 'Approved' | 'Pending' | 'Rejected';

interface DocRow {
  customerName: string;
  email: string;
  docType: string;
  status: DocStatus;
  lastUpdated: string;
  expiry: string;
}

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './documents.component.html',
})
export class DocumentsComponent implements OnInit {
  // filters
  search = '';
  selectedType = 'All';
  selectedStatus = 'All';

  // pagination
  pageSize = 8;
  currentPage = 1;

  docTypes = ['All', 'CAC Certificate', 'VAT Registration', 'SCUML Certificate', 'TIN Certificate'];
  statuses = ['All', 'Approved', 'Pending', 'Rejected'];

  // sample data (add/replace with real data)
  // documents: DocRow[] = [
  //   {
  //     customerName: 'Adaobi Okafor',
  //     email: 'adaobi.okafor@gmail.com',
  //     docType: 'CAC Certificate',
  //     status: 'Approved',
  //     lastUpdated: 'Aug 1, 2025',
  //     expiry: 'Aug 1, 2025',
  //   },
  //   {
  //     customerName: 'John Mensah',
  //     email: 'john.mensahr@gmail.com',
  //     docType: 'VAT Registration',
  //     status: 'Pending',
  //     lastUpdated: 'Aug 1, 2025',
  //     expiry: 'In Review',
  //   },
  //   {
  //     customerName: 'Sarah Bello',
  //     email: 'sarah.bello@gmail.com',
  //     docType: 'SCUML Certificate',
  //     status: 'Rejected',
  //     lastUpdated: 'Aug 1, 2025',
  //     expiry: 'N/A',
  //   },
  //   // duplicates to show long list
  //   {
  //     customerName: 'Sarah Bello',
  //     email: 'sarah.bello@gmail.com',
  //     docType: 'TIN Certificate',
  //     status: 'Approved',
  //     lastUpdated: 'Aug 1, 2025',
  //     expiry: 'N/A',
  //   },
  //   {
  //     customerName: 'Sarah Bello',
  //     email: 'sarah.bello@gmail.com',
  //     docType: 'TIN Certificate',
  //     status: 'Approved',
  //     lastUpdated: 'Aug 1, 2025',
  //     expiry: 'N/A',
  //   },
  //   {
  //     customerName: 'Sarah Bello',
  //     email: 'sarah.bello@gmail.com',
  //     docType: 'TIN Certificate',
  //     status: 'Approved',
  //     lastUpdated: 'Aug 1, 2025',
  //     expiry: 'N/A',
  //   },
  //   {
  //     customerName: 'Sarah Bello',
  //     email: 'sarah.bello@gmail.com',
  //     docType: 'TIN Certificate',
  //     status: 'Approved',
  //     lastUpdated: 'Aug 1, 2025',
  //     expiry: 'N/A',
  //   },
  //   {
  //     customerName: 'Sarah Bello',
  //     email: 'sarah.bello@gmail.com',
  //     docType: 'TIN Certificate',
  //     status: 'Approved',
  //     lastUpdated: 'Aug 1, 2025',
  //     expiry: 'N/A',
  //   },
  //   {
  //     customerName: 'Sarah Bello',
  //     email: 'sarah.bello@gmail.com',
  //     docType: 'TIN Certificate',
  //     status: 'Approved',
  //     lastUpdated: 'Aug 1, 2025',
  //     expiry: 'N/A',
  //   },
  //   {
  //     customerName: 'Sarah Bello',
  //     email: 'sarah.bello@gmail.com',
  //     docType: 'TIN Certificate',
  //     status: 'Approved',
  //     lastUpdated: 'Aug 1, 2025',
  //     expiry: 'N/A',
  //   },
  // ];

  documents: Document[] = [];

  constructor(
    private router: Router,
    private documentService: DocumentService,
    private sharedStateService: SharedStateService,
  ) {}

  ngOnInit(): void {
    this.documentService.getDocuments(this.currentPage, this.pageSize).subscribe(
      (res) => {
        this.documents = res.data.data;
        console.log('Fetched documents:', res.data.data);
      },
      (err) => {
        console.error('Error fetching documents:', err);
      },
    );
  }

  // filter logic
  get filteredDocs() {
    const term = this.search.trim().toLowerCase();
    return this.documents.filter((d) => {
      const matchesTerm =
        !term ||
        d.userFullName.toLowerCase().includes(term) ||
        d.email.toLowerCase().includes(term);
      const matchesType = this.selectedType === 'All' || d.documentType === this.selectedType;
      const matchesStatus =
        this.selectedStatus === 'All' || d.verificationStatus === this.selectedStatus;
      return matchesTerm && matchesType && matchesStatus;
    });
    //return [];
  }

  // paging helpers
  get totalPages() {
    return Math.max(1, Math.ceil(this.filteredDocs.length / this.pageSize));
  }

  get pageItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredDocs.slice(start, start + this.pageSize);
  }

  goToPage(p: number) {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    // keep user at top of content after page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToReview(id: number) {
    const documentCategory = this.documents.find((d) => d.documentId === id);
    this.sharedStateService.setDocumentInfo(documentCategory);
    this.router.navigateByUrl(`/main/documents/${id}`);
  }

  prev() {
    this.goToPage(this.currentPage - 1);
  }
  next() {
    this.goToPage(this.currentPage + 1);
  }

  // generate small list of page numbers with simple ellipsis (keeps UI compact)
  get pageList(): (number | '...')[] {
    const pages = this.totalPages;
    const cur = this.currentPage;
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

  // status badge classes (tailwind strings)
  statusClass(s: string) {
    switch (s) {
      case 'Approved':
        return 'bg-green-50 text-green-600';
      case 'Pending':
        return 'bg-amber-50 text-amber-600';
      case 'Rejected':
        return 'bg-red-50 text-red-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  }

  // status pills for mobile
  statusPillClass(status: string) {
    return {
      'text-green-700 bg-green-50 ring-green-100': status === 'Approved',
      'text-amber-700 bg-amber-50 ring-amber-100': status === 'Pending',
      'text-red-700 bg-red-50 ring-red-100': status === 'Rejected',
    };
  }
  dotClass(status: string) {
    return {
      'bg-green-500': status === 'Approved',
      'bg-amber-500': status === 'Pending',
      'bg-red-500': status === 'Rejected',
    };
  }

  // keep your existing desktop pill map, or reuse the mobile one:
  // statusClass(status: string) {
  //   return (
  //     'ring-1 ' +
  //     (status === 'Approved'
  //       ? 'text-green-700 bg-green-50 ring-green-100'
  //       : status === 'Pending'
  //         ? 'text-amber-700 bg-amber-50 ring-amber-100'
  //         : 'text-red-700 bg-red-50 ring-red-100')
  //   );
  // }
}
