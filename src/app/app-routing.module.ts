import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { LeaveFormComponent } from './staff-dashboard/leave-form/leave-form.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { StaffAuthGuard } from './shared/guard/staff-auth.guard';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ShowLeavesComponent } from './hod-dashboard/show-leaves/show-leaves.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'staffdb', component: StaffDashboardComponent, canActivate: [StaffAuthGuard] , children : [
    { path: 'leave', component: LeaveFormComponent },
  ] },
  { path: 'hoddb', component: HodDashboardComponent, canActivate: [AuthGuard], children: [
      { path: 'leaves', component: ShowLeavesComponent }
    ]
  },
  { path: '**', component: NoPageFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
