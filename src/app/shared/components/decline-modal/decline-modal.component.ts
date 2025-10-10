import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-decline-modal',
  imports: [CommonModule],
  templateUrl: './decline-modal.component.html',
  styleUrl: './decline-modal.component.scss',
})
export class DeclineModalComponent {
  @Input() isOpen = false;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
    // let parent close by toggling isOpen (parent owns visibility)
  }

  onCancel() {
    this.cancel.emit();
    // parent should set isOpen = false
  }
}
