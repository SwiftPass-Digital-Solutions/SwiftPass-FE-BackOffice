import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsAccessedComponent } from './documents-accessed.component';

describe('DocumentsAccessedComponent', () => {
  let component: DocumentsAccessedComponent;
  let fixture: ComponentFixture<DocumentsAccessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentsAccessedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsAccessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
