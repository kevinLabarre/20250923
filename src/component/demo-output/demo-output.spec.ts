import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOutput } from './demo-output';

describe('DemoOutput', () => {
  let component: DemoOutput;
  let fixture: ComponentFixture<DemoOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
