import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TextDetailsComponent } from './components/text-details/text-details.component';

const materialModules = [
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatProgressBarModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [TextDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    materialModules
  ],
  exports: [
    HttpClientModule,
    TextDetailsComponent,
    FormsModule,
    ReactiveFormsModule,
    materialModules
  ]
})
export class SharedModule { }
