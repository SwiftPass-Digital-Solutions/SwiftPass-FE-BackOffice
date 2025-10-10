import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TeamSetupModalComponent } from './team-setup-modal/team-setup-modal.component';

@Component({
  selector: 'app-team-management',
  imports: [CommonModule, TeamSetupModalComponent],
  templateUrl: './team-management.component.html',
  styleUrl: './team-management.component.scss',
})
export class TeamManagementComponent {
  teamMembers = [
    { name: 'Sarah Adebayo', email: 'sarah@swiftpass.ng', role: 'Super Admin' },
    { name: 'Fatima Hassan', email: 'fatima@swiftpass.ng', role: 'Document Reviewer' },
    { name: 'Michael Okonkwo', email: 'michael@swiftpass.ng', role: 'Business Manager' },
    { name: 'David Okoro', email: 'david@swiftpass.ng', role: 'Super Admin' },
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
