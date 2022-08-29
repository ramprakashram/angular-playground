import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BubbleChartsPocComponent } from './bubble-charts-poc.component';

describe('BubbleChartsPocComponent', () => {
  let component: BubbleChartsPocComponent;
  let fixture: ComponentFixture<BubbleChartsPocComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleChartsPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleChartsPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
