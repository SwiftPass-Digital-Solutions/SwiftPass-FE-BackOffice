import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-team-setup-modal',
  imports: [CommonModule],
  templateUrl: './team-setup-modal.component.html',
  styleUrl: './team-setup-modal.component.scss',
})
export class TeamSetupModalComponent {
  @Input() title = '';
  @Input() type: 'invite' | 'edit-member' | 'add-role' | 'edit-role' = 'invite';
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  permissions = [
    { name: 'Users', items: ['View Users', 'Edit Users', 'Delete Users'] },
    { name: 'Businesses', items: ['View Businesses', 'Edit Businesses', 'Delete Businesses'] },
    { name: 'Documents', items: ['View Documents', 'Edit Documents', 'Approve/Reject Documents'] },
    { name: 'Team', items: ['View Team', 'Edit Team', 'Invite/Remove Team Members'] },
    { name: 'Audit Logs', items: ['View Audit Logs'] },
  ];
}
