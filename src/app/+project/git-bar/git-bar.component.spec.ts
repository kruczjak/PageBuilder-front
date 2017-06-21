import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBarComponent } from './git-bar.component';
import { GitService } from "app/+project/git.service";
import { Angular2TokenService } from "angular2-token";
import { HttpModule } from "@angular/http";
import { ToasterService } from "angular2-toaster";

describe('GitBarComponent', () => {
  let component: GitBarComponent;
  let fixture: ComponentFixture<GitBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ GitBarComponent ],
      providers: [ GitService, Angular2TokenService, ToasterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
