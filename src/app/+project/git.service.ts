import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GitService {
  constructor(private http: Angular2TokenService) { }

  public commit(projectId: number): Observable<any> {
    return this.http.post(`${this.buildUrl(projectId)}/commit`, {}).map((response) => response.json());
  }

  public push(projectId: number): Observable<any> {
    return this.http.post(`${this.buildUrl(projectId)}/push`, {}).map((response) => response.json());
  }

  public pull(projectId: number): Observable<any> {
    return this.http.post(`${this.buildUrl(projectId)}/pull`, {}).map((response) => response.json());
  }

  public deploy(projectId: number): Observable<any> {
    return this.http.post(`${this.buildUrl(projectId)}/deploy`, {}).map((response) => response.json());
  }

  private buildUrl(projectId: number): string {
    return `api/projects/${projectId}/git`;
  }
}
