import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TextDetails } from 'src/app/shared/interfaces/text-details';
import { MessageService } from 'src/app/shared/services/message.service';
import { FileValidation } from 'src/app/shared/validations/file-validation';
import { FileInputService } from '../../services/file-input.service';
import { FileDetailsModalComponent } from '../file-details-modal/file-details-modal.component';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent implements OnInit, OnDestroy {

  constructor(
    private fileInputService: FileInputService,
    private messageService: MessageService,
    private dialog: MatDialog
  ) { }

  private subscription: Subscription = new Subscription();
  private fileBase64: string | ArrayBuffer;
  private fileName: string;

  public showLoader: boolean = false;

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    let component = this;
    let file = files[0];

    if(!FileValidation.isTextFile(file)) {
      this.messageService.errorMessage("File type is incorrect. It must be text file: .txt, .doc or .docx.");
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      component.fileBase64 = reader.result;
      component.fileName = file.name;
      component.getFileDetails();
    };
    
    reader.onerror = function (error: any) {
      component.messageService.errorMessage(error);
    };
  }  

  private getFileDetails() {
    const request = this.fileInputService.getWords({
      fileInBase64String: this.fileBase64
    });

    this.showLoader = true;

    this.subscription.add(
      request.subscribe(data => {
        this.showModal(data);
        this.showLoader = false;
      }, error => {
        this.showLoader = false;
      })
    )
  }

  private showModal(textDetails: TextDetails) {
    const modal = this.dialog.open(FileDetailsModalComponent, 
      {
        width: "40%",
        data: {
          ...textDetails,
          fileName: this.fileName
        }
      }
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
