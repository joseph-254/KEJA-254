import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from 'src/app/views/public-dashboard/home-page/home-page.component';
import { PublicDashboardRoutingModule } from 'src/app/routes/public-dashboard-routing/public-dashboard-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    PublicDashboardRoutingModule
  ]
})
export class PublicDashboardModule { }
