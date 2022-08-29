import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CovidStatsComponent } from './covid-stats.component';

describe('CovidStatsComponent', () => {
  let component: CovidStatsComponent;
  let fixture: ComponentFixture<CovidStatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
