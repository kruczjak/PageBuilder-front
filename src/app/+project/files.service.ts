import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class FilesService {
  private readonly BASE_URL = 'api/projects';

  constructor(private http: Angular2TokenService) { }

  public get(projectId: number, path: string): Observable<any> {
    return this.http.get(this.generateUrl(projectId), { search: { id: path } }).map((response) => response.json());
  }

  public update(projectId: number, path: string, body: any): Observable<any> {
    return this.http.put(this.generateUrl(projectId), { file: { content: body }, id: path }).map((response) => response.json());
  }

  public removeFile(projectId: number, path: string): Observable<any> {
    return this.http.delete(this.generateUrl(projectId), { search: { id: path } }).map((response) => response.json());
  }

  private generateUrl(projectId: number): string {
    return `${this.BASE_URL}/${projectId}/files`;
  }
}
