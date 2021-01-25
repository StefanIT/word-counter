import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputCardComponent } from './user-input-card.component';

describe('UserInputCardComponent', () => {
  let component: UserInputCardComponent;
  let fixture: ComponentFixture<UserInputCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInputCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
