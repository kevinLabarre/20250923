import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewsForm } from './update-news-form';

describe('UpdateNewsForm', () => {
  let component: UpdateNewsForm;
  let fixture: ComponentFixture<UpdateNewsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateNewsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNewsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
