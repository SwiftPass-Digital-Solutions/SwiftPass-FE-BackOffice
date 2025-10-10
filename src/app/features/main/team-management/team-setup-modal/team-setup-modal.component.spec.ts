import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSetupModalComponent } from './team-setup-modal.component';

describe('TeamSetupModalComponent', () => {
  let component: TeamSetupModalComponent;
  let fixture: ComponentFixture<TeamSetupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamSetupModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamSetupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
