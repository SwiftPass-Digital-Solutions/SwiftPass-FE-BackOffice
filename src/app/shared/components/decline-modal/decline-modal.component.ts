import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-decline-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './decline-modal.component.html',
  styleUrl: './decline-modal.component.scss',
})
export class DeclineModalComponent implements OnChanges {
  @Input() isOpen = false;
  declineText!: string;
  @Output() confirm = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['isOpen']) {
    //   if (this.isOpen) {
    //     // lock background scroll
    //     try {
    //       document.body.style.overflow = 'hidden';
    //     } catch {}
    //     // focus primary after small delay so element exists
    //     //setTimeout(() => this.confirmButton?.nativeElement?.focus(), 50);
    //   } else {
    //     try {
    //       document.body.style.overflow = '';
    //     } catch {}
    //   }
    // }
  }

  onConfirm() {
    this.confirm.emit(this.declineText);
    // let parent close by toggling isOpen (parent owns visibility)
  }

  onCancel() {
    this.cancel.emit();
    // parent should set isOpen = false
  }
}
