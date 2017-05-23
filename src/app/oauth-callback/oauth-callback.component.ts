import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oauth-callback',
  templateUrl: './oauth-callback.component.html',
  styleUrls: ['./oauth-callback.component.css']
})
export class OauthCallbackComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService, private router: Router) {}

  ngOnInit() {
    this._tokenService.processOAuthCallback();
    this.router.navigate(['/']);
  }

}
