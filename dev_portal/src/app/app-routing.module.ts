import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin-dashboard', 
    loadChildren: () => import('./modules/admin-dashboard/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) 
  },
    { path: 'public', 
    loadChildren: () => import('./modules/public-dashboard/public-dashboard/public-dashboard.module').then(m => m.PublicDashboardModule) 
  },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  {
    path: '**', redirectTo: 'public'
  }

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
