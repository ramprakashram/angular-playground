import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3CircleChartPocV2Component } from './d3-circle-chart-poc-v2.component';

describe('D3CircleChartPocV2Component', () => {
  let component: D3CircleChartPocV2Component;
  let fixture: ComponentFixture<D3CircleChartPocV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3CircleChartPocV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CircleChartPocV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
