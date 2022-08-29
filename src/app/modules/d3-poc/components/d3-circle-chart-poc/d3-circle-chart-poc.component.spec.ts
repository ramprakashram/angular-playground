import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { D3CircleChartPocComponent } from './d3-circle-chart-poc.component';

describe('D3CircleChartPocComponent', () => {
  let component: D3CircleChartPocComponent;
  let fixture: ComponentFixture<D3CircleChartPocComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ D3CircleChartPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CircleChartPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
