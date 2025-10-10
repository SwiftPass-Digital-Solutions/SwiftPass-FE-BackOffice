import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBillingHistoryComponent } from './business-billing-history.component';

describe('BusinessBillingHistoryComponent', () => {
  let component: BusinessBillingHistoryComponent;
  let fixture: ComponentFixture<BusinessBillingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessBillingHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessBillingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
