import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseInputRoutingModule } from './database-input-routing.module';
import { TextsTableComponent } from './components/texts-table/texts-table.component';
import { TextsFormComponent } from './components/texts-form/texts-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TextsTableComponent, TextsFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    DatabaseInputRoutingModule
  ]
})
export class DatabaseInputModule { }
