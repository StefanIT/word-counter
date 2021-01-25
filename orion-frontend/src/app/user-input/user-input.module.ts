import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SharedModule } from '../shared/shared.module';
import { UserInputCardComponent } from './components/user-input-card/user-input-card.component';
import { UserInputModalComponent } from './components/user-input-modal/user-input-modal.component';

@NgModule({
  declarations: [UserInputCardComponent, UserInputModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    CKEditorModule
  ],
  exports: [UserInputCardComponent, UserInputModalComponent],
  entryComponents: [UserInputModalComponent]
})
export class UserInputModule { }
