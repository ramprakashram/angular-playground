import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatHeaderComponent } from './covid-stat-header.component';

describe('CovidStatHeaderComponent', () => {
  let component: CovidStatHeaderComponent;
  let fixture: ComponentFixture<CovidStatHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidStatHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
