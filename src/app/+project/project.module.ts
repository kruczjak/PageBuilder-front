import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectShowComponent } from './project-show/project-show.component';
import { MomentModule } from 'angular2-moment';
import { TreeModule } from 'angular-tree-component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MomentModule,
    TreeModule,
  ],
  declarations: [ProjectShowComponent, EditorComponent]
})
export class ProjectModule { }
