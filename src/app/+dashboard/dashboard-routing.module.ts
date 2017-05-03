import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { DashboardIndexComponent } from 'app/+dashboard/dashboard-index/dashboard-index.component';

const routes: Routes = [
  { path: '', component: DashboardIndexComponent, canActivate: [Angular2TokenService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
