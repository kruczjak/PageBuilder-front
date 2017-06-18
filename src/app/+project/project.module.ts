import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectShowComponent } from './project-show/project-show.component';
import { MomentModule } from 'angular2-moment';
import { TreeModule } from 'angular-tree-component';
import { EditorComponent } from './editor/editor.component';
import { TabsModule } from 'ngx-bootstrap';
import { CodeMirrorDirective } from './code-mirror.directive';
import { FileComponent } from './file/file.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProjectRoutingModule,
    MomentModule,
    TreeModule,
    TabsModule,
  ],
  declarations: [ProjectShowComponent, EditorComponent, CodeMirrorDirective, FileComponent]
})
export class ProjectModule { }
