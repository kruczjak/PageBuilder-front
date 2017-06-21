import { TestBed, inject } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { Angular2TokenService } from "angular2-token";
import { HttpModule } from "@angular/http";

describe('SettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [SettingsService, Angular2TokenService]
    });
  });

  it('should be created', inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
