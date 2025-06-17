import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/views/public-dashboard/home-page/home-page.component';



const routes: Routes = [
    { path: '', component: HomePageComponent },

]

@NgModule({
  // declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
    

})
export class PublicDashboardRoutingModule { }
