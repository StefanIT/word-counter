import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Subscription } from 'rxjs';
import { UserinputService } from '../../services/userinput.service';

@Component({
  selector: 'app-user-input-modal',
  templateUrl: './user-input-modal.component.html',
  styleUrls: ['./user-input-modal.component.scss']
})
export class UserInputModalComponent implements OnInit, OnDestroy {

  @ViewChild("ckeditor") editor;
  constructor(
    private dialogRef: MatDialogRef<UserInputModalComponent>,
    private userInputService: UserinputService
  ) { }
  
  private subscription: Subscription = new Subscription();

  public Editor = ClassicEditor;
  public editorText = "";
  public wordsCount: number = null;
  public showLoader: boolean = false;

  ngOnInit(): void {
  }

  calculateWords() {
    this.showLoader = true;
    
    const request = this.userInputService.getWords({
      content: this.getNativeTextFromEditor()
    })
    this.subscription.add(request.subscribe(data => {
      if(data) {
        this.wordsCount = data.count;
        this.showLoader = false;
      }
    }, error => {
      this.showLoader = false;
    }));
  }

  private getNativeTextFromEditor(){
    var temp = document.createElement("div");
    temp.innerHTML = this.editorText;
    return temp.textContent;
  }

  close() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

