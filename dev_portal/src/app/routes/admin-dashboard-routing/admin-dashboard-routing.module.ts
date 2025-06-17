import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/views/admin-dashboard/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'app-dashboard',
    component: DashboardComponent }
]


@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AdminDashboardRoutingModule { }
