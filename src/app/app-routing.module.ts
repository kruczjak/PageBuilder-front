import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OauthCallbackComponent } from 'app/oauth-callback/oauth-callback.component';

const routes: Routes = [
  { path: 'oauth_callback', component: OauthCallbackComponent },
  {
    path: '',
    loadChildren: './+dashboard/dashboard.module.ts#DashboardModule',
  },
  {
    path: 'session',
    loadChildren: './+session/session.module.ts#SessionModule',
  },
  {
    path: 'project',
    loadChildren: './+project/project.module.ts#ProjectModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
