import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidCountryDetailViewComponent } from './covid-country-detail-view.component';

describe('CovidCountryDetailViewComponent', () => {
  let component: CovidCountryDetailViewComponent;
  let fixture: ComponentFixture<CovidCountryDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidCountryDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCountryDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
