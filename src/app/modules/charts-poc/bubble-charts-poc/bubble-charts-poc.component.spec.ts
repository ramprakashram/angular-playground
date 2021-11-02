import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleChartsPocComponent } from './bubble-charts-poc.component';

describe('BubbleChartsPocComponent', () => {
  let component: BubbleChartsPocComponent;
  let fixture: ComponentFixture<BubbleChartsPocComponent>;

  beforeEach(async(() => {
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
