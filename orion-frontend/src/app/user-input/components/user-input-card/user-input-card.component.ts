import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TextDetails } from 'src/app/shared/interfaces/text-details';
import { UserInputModalComponent } from '../user-input-modal/user-input-modal.component';

@Component({
  selector: 'app-user-input-card',
  templateUrl: './user-input-card.component.html',
  styleUrls: ['./user-input-card.component.scss']
})
export class UserInputCardComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  showModal() {
    const modal = this.dialog.open(UserInputModalComponent, 
      {
        width: "70%",
        maxHeight: '90vh'
      }
    );
  }

}
