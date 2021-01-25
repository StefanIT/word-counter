import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileInputDetails } from '../../interfaces/file-input-details';

@Component({
  selector: 'app-file-details-modal',
  templateUrl: './file-details-modal.component.html',
  styleUrls: ['./file-details-modal.component.scss']
})
export class FileDetailsModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FileDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FileInputDetails
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
