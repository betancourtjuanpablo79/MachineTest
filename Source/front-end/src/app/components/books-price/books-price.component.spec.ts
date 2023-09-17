import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPriceComponent } from './books-price.component';

describe('BooksPriceComponent', () => {
  let component: BooksPriceComponent;
  let fixture: ComponentFixture<BooksPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksPriceComponent]
    });
    fixture = TestBed.createComponent(BooksPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
