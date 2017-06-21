import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsModule } from "ngx-bootstrap";
import { FileComponent } from "app/+project/file/file.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CodeMirrorDirective } from "app/+project/code-mirror.directive";
import { EditorComponent } from "app/+project/editor/editor.component";
import { FilesService } from "app/+project/files.service";
import { Angular2TokenService } from "angular2-token";
import { ToasterService } from "angular2-toaster";

describe('FileComponent', () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;

  beforeEach(async(() => {
    const tokenMock = jasmine.createSpyObj('tokenMock', ['get', 'subscribe']);
    const observable = jasmine.createSpyObj('obs', ['map']);
    tokenMock.get.and.returnValue(observable);
    observable.map.and.returnValue(jasmine.createSpyObj('sub', ['subscribe']));

    TestBed.configureTestingModule({
      imports: [ TabsModule.forRoot(), ReactiveFormsModule ],
      declarations: [ EditorComponent, FileComponent, CodeMirrorDirective ],
      providers: [ FilesService, { provide: Angular2TokenService, useValue: tokenMock }, ToasterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
