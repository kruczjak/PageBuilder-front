import { TestBed, inject } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { Angular2TokenService } from "angular2-token";
import { HttpModule } from "@angular/http";

describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ProjectsService, Angular2TokenService]
    });
  });

  it('should be created', inject([ProjectsService], (service: ProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
