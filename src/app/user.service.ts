import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  public static readonly USER_URL = 'api/user';
  private currentUser;

  constructor(private angular2Token: Angular2TokenService) {
    this.getUser().subscribe((json) => this.currentUser = json);
  }

  private getUser(): Observable<any> {
    return this.angular2Token.get(UserService.USER_URL).map((response) => response.json());
  }

}
