import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angular2TokenService } from 'angular2-token';
import { OauthCallbackComponent } from './oauth-callback/oauth-callback.component';
import { ProjectsService } from './projects.service';
import { BsDropdownModule, ModalModule, TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OauthCallbackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [Angular2TokenService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
