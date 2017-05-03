import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private tokenService: Angular2TokenService) { }

  ngOnInit() {
    this.tokenService.signInOAuth('facebook').subscribe(() => null);
  }

}
