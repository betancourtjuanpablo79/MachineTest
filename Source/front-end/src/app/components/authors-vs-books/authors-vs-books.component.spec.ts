import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsVsBooksComponent } from './authors-vs-books.component';

describe('AuthorsVsBooksComponent', () => {
  let component: AuthorsVsBooksComponent;
  let fixture: ComponentFixture<AuthorsVsBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsVsBooksComponent]
    });
    fixture = TestBed.createComponent(AuthorsVsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
