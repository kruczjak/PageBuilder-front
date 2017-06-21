import { TestBed, inject } from '@angular/core/testing';

import { GitService } from './git.service';
import { Angular2TokenService } from "angular2-token";
import { HttpModule } from "@angular/http";

describe('GitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GitService, Angular2TokenService]
    });
  });

  it('should be created', inject([GitService], (service: GitService) => {
    expect(service).toBeTruthy();
  }));
});
