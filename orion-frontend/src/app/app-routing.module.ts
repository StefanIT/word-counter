import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';

const routes: Routes = [
    {
      path: "",
      component: FrontendLayoutComponent,
      children: [ 
        {
          path: "",
          component: DashboardComponent
        },
        {
          path: "database",
          loadChildren: () => import('./database-input/database-input.module').then(m => m.DatabaseInputModule)
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
