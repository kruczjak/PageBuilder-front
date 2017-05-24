import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectsService {
  private readonly BASE_URL = 'api/projects';

  constructor(private http: Angular2TokenService) {}

  public index(): Observable<any> {
    return this.http.get(this.BASE_URL).map((response) => response.json());
  }

  public show(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/${id}`).map((response) => response.json());
  }
}