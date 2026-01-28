import { BusinessInfoDocument } from './../../../core/interfaces/business/business-info.interface';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-document-modal',
  imports: [CommonModule],
  templateUrl: './view-document-modal.component.html',
  styleUrl: './view-document-modal.component.scss',
})
export class ViewDocumentModalComponent {
  @Input() open = false;

  @Input() document!: BusinessInfoDocument;

  @Output() close = new EventEmitter<void>();
  @Output() approve = new EventEmitter<void>();
  @Output() reject = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  download(url: string, fileName: string) {
    this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      const objectUrl = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = fileName;
      a.click();

      URL.revokeObjectURL(objectUrl);
    });
  }

  downloadFile(url: string | undefined, name: string | undefined) {
    if (url && name) {
      this.download(url, name);
    }
  }

  onClose() {
    this.close.emit();
  }

  get canBeApprovedOrDeclined() {
    console.log(this.document.verificationStatus);
    return (
      this.document.verificationStatus === 'Pending' ||
      this.document.verificationStatus === 'NotSubmitted'
    );
  }
}
