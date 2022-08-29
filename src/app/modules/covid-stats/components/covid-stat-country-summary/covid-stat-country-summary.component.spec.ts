import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CovidStatCountrySummaryComponent } from './covid-stat-country-summary.component';

describe('CovidStatCountrySummaryComponent', () => {
  let component: CovidStatCountrySummaryComponent;
  let fixture: ComponentFixture<CovidStatCountrySummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidStatCountrySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatCountrySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
