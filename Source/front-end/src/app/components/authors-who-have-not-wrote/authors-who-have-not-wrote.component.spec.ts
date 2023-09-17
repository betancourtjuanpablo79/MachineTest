import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsWhoHaveNotWroteComponent } from './authors-who-have-not-wrote.component';

describe('AuthorsWhoHaveNotWroteComponent', () => {
  let component: AuthorsWhoHaveNotWroteComponent;
  let fixture: ComponentFixture<AuthorsWhoHaveNotWroteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsWhoHaveNotWroteComponent]
    });
    fixture = TestBed.createComponent(AuthorsWhoHaveNotWroteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
