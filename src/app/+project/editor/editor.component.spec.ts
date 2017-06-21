import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { TabsModule } from "ngx-bootstrap";
import { FileComponent } from "app/+project/file/file.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CodeMirrorDirective } from "app/+project/code-mirror.directive";

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TabsModule.forRoot(), ReactiveFormsModule ],
      declarations: [ EditorComponent, FileComponent, CodeMirrorDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
