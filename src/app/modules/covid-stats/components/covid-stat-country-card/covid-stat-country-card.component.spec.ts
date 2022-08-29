import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CovidStatCountryCardComponent } from './covid-stat-country-card.component';

describe('CovidStatCountryCardComponent', () => {
  let component: CovidStatCountryCardComponent;
  let fixture: ComponentFixture<CovidStatCountryCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidStatCountryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatCountryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
