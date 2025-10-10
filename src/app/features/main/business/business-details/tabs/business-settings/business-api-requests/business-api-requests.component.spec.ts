import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessApiRequestsComponent } from './business-api-requests.component';

describe('BusinessApiRequestsComponent', () => {
  let component: BusinessApiRequestsComponent;
  let fixture: ComponentFixture<BusinessApiRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessApiRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessApiRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
