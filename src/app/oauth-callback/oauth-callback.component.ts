import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-oauth-callback',
  templateUrl: './oauth-callback.component.html',
  styleUrls: ['./oauth-callback.component.css']
})
export class OauthCallbackComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) {}

  ngOnInit() {
    this._tokenService.processOAuthCallback();
  }

}
