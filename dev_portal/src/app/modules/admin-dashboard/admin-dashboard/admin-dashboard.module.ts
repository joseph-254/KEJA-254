import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/views/admin-dashboard/dashboard/dashboard.component';
import { AdminDashboardRoutingModule } from 'src/app/routes/admin-dashboard-routing/admin-dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
