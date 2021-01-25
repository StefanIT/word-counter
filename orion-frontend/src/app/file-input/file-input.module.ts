import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileCardComponent } from './components/file-card/file-card.component';
import { FileDetailsModalComponent } from './components/file-details-modal/file-details-modal.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FileCardComponent, FileDetailsModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FileCardComponent, FileDetailsModalComponent],
  entryComponents: [FileDetailsModalComponent]
})
export class FileInputModule { }
