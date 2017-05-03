import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private tokenService: Angular2TokenService) {
    this.tokenService.init({
      apiBase: environment.host,
      oAuthBase: environment.host,
      signInRedirect: '/session/sign_in',
      oAuthWindowType: 'sameWindow',
    });
  }
}
