import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatPinnedCountriesComponent } from './covid-stat-pinned-countries.component';

describe('CovidStatPinnedCountriesComponent', () => {
  let component: CovidStatPinnedCountriesComponent;
  let fixture: ComponentFixture<CovidStatPinnedCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidStatPinnedCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatPinnedCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
