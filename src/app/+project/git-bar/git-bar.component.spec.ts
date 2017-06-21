import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBarComponent } from './git-bar.component';
import { GitService } from "app/+project/git.service";
import { Angular2TokenService } from "angular2-token";

describe('GitBarComponent', () => {
  let component: GitBarComponent;
  let fixture: ComponentFixture<GitBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitBarComponent ],
      providers: [ GitService, Angular2TokenService ]
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
