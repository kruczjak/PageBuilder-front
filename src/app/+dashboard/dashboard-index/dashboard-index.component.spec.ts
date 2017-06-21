import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIndexComponent } from './dashboard-index.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentModule } from 'angular2-moment';
import { ModalModule } from 'ngx-bootstrap';
import { ProjectFormComponent } from 'app/+dashboard/project-form/project-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from 'app/projects.service';
import { Angular2TokenService } from 'angular2-token';
import { HttpModule } from '@angular/http';

describe('DashboardIndexComponent', () => {
  let component: DashboardIndexComponent;
  let fixture: ComponentFixture<DashboardIndexComponent>;

  beforeEach(async(() => {
    const tokenMock = jasmine.createSpyObj('tokenMock', ['get', 'subscribe']);
    tokenMock.get.and.returnValue(jasmine.createSpyObj('obs', ['map']));

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, MomentModule, ModalModule.forRoot(), ReactiveFormsModule, HttpModule ],
      declarations: [ DashboardIndexComponent, ProjectFormComponent ],
      providers: [ ProjectsService, { provide: Angular2TokenService, useValue: tokenMock } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
