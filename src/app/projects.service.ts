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

  public create(newProject: any): Observable<any> {
    return this.http.post(this.BASE_URL, {project: newProject})
      .map((response) => response.json());
  }
}
