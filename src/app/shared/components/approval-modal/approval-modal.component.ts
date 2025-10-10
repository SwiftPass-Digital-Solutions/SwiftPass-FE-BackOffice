import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-approval-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approval-modal.component.html',
})
export class ApprovalModalComponent implements OnChanges, OnDestroy {
  /** Control visibility from parent */
  @Input() isOpen = false;

  /** Text content (customize from parent) */
  @Input() title = 'Document Approved';
  @Input() message = 'User will be notified and can proceed with verification.';
  @Input() confirmLabel = 'Go to Documents';
  @Input() cancelLabel = 'Cancel';

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  @ViewChild('confirmButton', { static: false }) confirmButton?: ElementRef<HTMLButtonElement>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      if (this.isOpen) {
        // lock background scroll
        try {
          document.body.style.overflow = 'hidden';
        } catch {}
        // focus primary after small delay so element exists
        setTimeout(() => this.confirmButton?.nativeElement?.focus(), 50);
      } else {
        try {
          document.body.style.overflow = '';
        } catch {}
      }
    }
  }

  ngOnDestroy() {
    try {
      document.body.style.overflow = '';
    } catch {}
  }

  onConfirm() {
    this.confirm.emit();
    // let parent close by toggling isOpen (parent owns visibility)
  }

  onCancel() {
    this.cancel.emit();
    // parent should set isOpen = false
  }

  // keyboard shortcuts for convenience
  // @HostListener('document:keydown.escape', ['$event'])
  // onEsc(_: KeyboardEvent) {
  //   if (this.isOpen) this.onCancel();
  // }

  // @HostListener('document:keydown.enter', ['$event'])
  // onEnter(_: KeyboardEvent) {
  //   if (this.isOpen) this.onConfirm();
  // }
}
