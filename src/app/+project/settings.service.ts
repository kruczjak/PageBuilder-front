import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingsService {

  constructor(private http: Angular2TokenService) { }

  public get(projectId: number): Observable<any> {
    return this.http.get(this.buildUrl(projectId)).map((response) => response.json());
  }

  public update(projectId: number, body: any): Observable<any> {
    return this.http.put(this.buildUrl(projectId), { settings: body }).map((response) => response.json());
  }

  private buildUrl(projectId: number): string {
    return `api/projects/${projectId}/settings`;
  }
}
