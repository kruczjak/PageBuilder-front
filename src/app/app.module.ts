import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A2tUiModule, Angular2TokenService } from 'angular2-token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    A2tUiModule,
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
