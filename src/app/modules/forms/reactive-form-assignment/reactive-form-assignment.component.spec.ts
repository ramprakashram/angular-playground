import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAssignmentComponent } from './reactive-form-assignment.component';

describe('ReactiveFormAssignmentComponent', () => {
  let component: ReactiveFormAssignmentComponent;
  let fixture: ComponentFixture<ReactiveFormAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
