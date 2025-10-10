import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDocumentComponent } from './business-document.component';

describe('BusinessDocumentComponent', () => {
  let component: BusinessDocumentComponent;
  let fixture: ComponentFixture<BusinessDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
