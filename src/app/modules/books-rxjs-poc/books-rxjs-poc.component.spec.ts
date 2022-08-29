import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BooksRxjsPocComponent } from './books-rxjs-poc.component';

describe('BooksRxjsPocComponent', () => {
  let component: BooksRxjsPocComponent;
  let fixture: ComponentFixture<BooksRxjsPocComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksRxjsPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksRxjsPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
