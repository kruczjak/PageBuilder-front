import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFormComponent } from './project-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ProjectsService } from "app/projects.service";
import { Angular2TokenService } from "angular2-token";

describe('ProjectFormComponent', () => {
  let component: ProjectFormComponent;
  let fixture: ComponentFixture<ProjectFormComponent>;

  beforeEach(async(() => {
    const tokenMock = jasmine.createSpyObj('tokenMock', ['get', 'subscribe']);
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ProjectFormComponent ],
      providers: [ ProjectsService, { provide: Angular2TokenService, useValue: tokenMock } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
