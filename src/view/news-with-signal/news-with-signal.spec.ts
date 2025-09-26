import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWithSignal } from './news-with-signal';

describe('NewsWithSignal', () => {
  let component: NewsWithSignal;
  let fixture: ComponentFixture<NewsWithSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsWithSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsWithSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
