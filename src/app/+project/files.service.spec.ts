import { TestBed, inject } from '@angular/core/testing';

import { FilesService } from './files.service';
import { Angular2TokenService } from "angular2-token";
import { HttpModule } from "@angular/http";

describe('FilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [FilesService, Angular2TokenService]
    });
  });

  it('should be created', inject([FilesService], (service: FilesService) => {
    expect(service).toBeTruthy();
  }));
});
