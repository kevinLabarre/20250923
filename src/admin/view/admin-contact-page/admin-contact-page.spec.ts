import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactPage } from './admin-contact-page';

describe('AdminContactPage', () => {
  let component: AdminContactPage;
  let fixture: ComponentFixture<AdminContactPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminContactPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
