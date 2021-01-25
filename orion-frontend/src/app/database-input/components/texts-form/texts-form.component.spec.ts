import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsFormComponent } from './texts-form.component';

describe('TextsFormComponent', () => {
  let component: TextsFormComponent;
  let fixture: ComponentFixture<TextsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
