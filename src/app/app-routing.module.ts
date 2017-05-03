import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { AppComponent } from 'app/app.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
