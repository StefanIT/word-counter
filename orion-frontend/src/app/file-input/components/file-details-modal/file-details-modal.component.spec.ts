import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDetailsModalComponent } from './file-details-modal.component';

describe('FileDetailsModalComponent', () => {
  let component: FileDetailsModalComponent;
  let fixture: ComponentFixture<FileDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
