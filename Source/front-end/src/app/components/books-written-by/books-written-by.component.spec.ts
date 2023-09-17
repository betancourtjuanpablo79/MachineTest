import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWrittenByComponent } from './books-written-by.component';

describe('BooksWrittenByComponent', () => {
  let component: BooksWrittenByComponent;
  let fixture: ComponentFixture<BooksWrittenByComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksWrittenByComponent]
    });
    fixture = TestBed.createComponent(BooksWrittenByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
