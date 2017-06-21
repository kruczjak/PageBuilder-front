import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsModalComponent } from './settings-modal.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap";
import { SettingsService } from "app/+project/settings.service";
import { Angular2TokenService } from "angular2-token";
import { HttpModule } from "@angular/http";
import { ToasterService } from "angular2-toaster";

describe('SettingsModalComponent', () => {
  let component: SettingsModalComponent;
  let fixture: ComponentFixture<SettingsModalComponent>;

  beforeEach(async(() => {
    const tokenMock = jasmine.createSpyObj('tokenMock', ['get', 'subscribe']);
    const observable = jasmine.createSpyObj('obs', ['map']);
    tokenMock.get.and.returnValue(observable);
    observable.map.and.returnValue(jasmine.createSpyObj('sub', ['subscribe']));

    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, ModalModule.forRoot(), HttpModule ],
      declarations: [ SettingsModalComponent ],
      providers: [ SettingsService, { provide: Angular2TokenService, useValue: tokenMock }, ToasterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
