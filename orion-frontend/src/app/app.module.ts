import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './layouts/frontend-layout/footer/footer.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { MainComponent } from './layouts/frontend-layout/main/main.component';
import { TopbarComponent } from './layouts/frontend-layout/topbar/topbar.component';
import { SharedModule } from './shared/shared.module';
import { DatabaseCardComponent } from './components/dashboard/database-card/database-card.component';
import { FileInputModule } from './file-input/file-input.module';
import { ToastrModule } from 'ngx-toastr';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopbarComponent,
    MainComponent,
    FooterComponent,
    FrontendLayoutComponent,
    DatabaseCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    SharedModule,
    FileInputModule,
    UserInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
