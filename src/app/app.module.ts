import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angular2TokenService } from 'angular2-token';
import { OauthCallbackComponent } from './oauth-callback/oauth-callback.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    OauthCallbackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [Angular2TokenService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
