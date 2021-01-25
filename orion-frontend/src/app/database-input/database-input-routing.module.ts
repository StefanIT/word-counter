import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextsTableComponent } from './components/texts-table/texts-table.component';

const routes: Routes = [
  {
    path: "",
    component: TextsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseInputRoutingModule { }
