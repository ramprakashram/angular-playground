import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidCountryStatusLineChartComponent } from './covid-country-status-line-chart.component';

describe('CovidCountryStatusLineChartComponent', () => {
  let component: CovidCountryStatusLineChartComponent;
  let fixture: ComponentFixture<CovidCountryStatusLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidCountryStatusLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCountryStatusLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
