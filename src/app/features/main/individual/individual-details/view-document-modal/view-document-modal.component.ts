import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-document-modal',
  imports: [CommonModule],
  templateUrl: './view-document-modal.component.html',
  styleUrl: './view-document-modal.component.scss',
})
export class ViewDocumentModalComponent {
  @Input() isOpen = false;
  @Input() documentImage = '/assets/nin-sample.png';
  @Output() close = new EventEmitter<void>();
  @Output() reject = new EventEmitter<void>();

  closeModal(event?: MouseEvent) {
    if (!event || event.target === event.currentTarget) {
      this.close.emit();
    }
  }

  rejectDocument() {
    this.reject.emit();
  }

  downloadFile() {
    console.log('Downloading file...');
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = '/assets/placeholder.png';
  }
}
