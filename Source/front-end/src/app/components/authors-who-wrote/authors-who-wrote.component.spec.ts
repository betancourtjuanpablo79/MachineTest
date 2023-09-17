import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsWhoWroteComponent } from './authors-who-wrote.component';

describe('AuthorsWhoWroteComponent', () => {
  let component: AuthorsWhoWroteComponent;
  let fixture: ComponentFixture<AuthorsWhoWroteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsWhoWroteComponent]
    });
    fixture = TestBed.createComponent(AuthorsWhoWroteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
