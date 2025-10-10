import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TeamSetupModalComponent } from '../team-setup-modal/team-setup-modal.component';

@Component({
  selector: 'app-role-management',
  imports: [CommonModule, TeamSetupModalComponent],
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.scss',
})
export class RoleManagementComponent {
  roles = [
    {
      name: 'Super Admin',
      description: 'Full system access with all permissions',
      members: 1,
      permissions: 14,
    },
    {
      name: 'Support Admin',
      description: 'Provides user support and basic management',
      members: 1,
      permissions: 14,
    },
    {
      name: 'Document Reviewer',
      description: 'Can review and approve/reject documents',
      members: 1,
      permissions: 14,
    },
    {
      name: 'Business Manager',
      description: 'Manages business accounts and API integrations',
      members: 1,
      permissions: 14,
    },
  ];

  showModal = false;
  modalTitle = 'Invite New Member';
  modalType: 'invite' | 'edit-member' | 'add-role' | 'edit-role' = 'invite';

  openInvite() {
    this.modalTitle = 'Invite New Member';
    this.modalType = 'invite';
    this.showModal = true;
  }
}
