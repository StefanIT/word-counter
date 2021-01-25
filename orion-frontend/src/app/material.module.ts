import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input' ;
import {MatDialogModule } from '@angular/material/dialog' ;
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule]
})
export class MaterialModule {}