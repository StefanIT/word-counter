import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TextDetails } from 'src/app/shared/interfaces/text-details';
import { TextsService } from '../../services/texts.service';

@Component({
  selector: 'app-texts-form',
  templateUrl: './texts-form.component.html',
  styleUrls: ['./texts-form.component.scss']
})
export class TextsFormComponent implements OnInit, OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TextsFormComponent>,
    private textsService: TextsService
  ) { }

  private subscription: Subscription = new Subscription();

  form = this.formBuilder.group({
    content: ['', Validators.required]
  });

  insertedText: TextDetails;
  showLoader: boolean = false;

  ngOnInit(): void {
  }

  insertText() {
    this.showLoader = true;
    const request = this.textsService.insert({
      content: this.form.get('content').value
    })
    this.subscription.add(
      request.subscribe(data => {
        this.showLoader = false;
        this.insertedText = data;
      }, error => {
        this.showLoader = false;
      })
    )
  }

  close() {
    this.dialogRef.close();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
