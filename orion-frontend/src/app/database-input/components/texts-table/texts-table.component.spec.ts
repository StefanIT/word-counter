import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsTableComponent } from './texts-table.component';

describe('TextsTableComponent', () => {
  let component: TextsTableComponent;
  let fixture: ComponentFixture<TextsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
