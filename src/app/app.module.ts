import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { LeaveFormComponent } from './staff-dashboard/leave-form/leave-form.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ShowLeavesComponent } from './hod-dashboard/show-leaves/show-leaves.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    StaffDashboardComponent,
    HodDashboardComponent,
    LeaveFormComponent,
    NoPageFoundComponent,
    ShowLeavesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
