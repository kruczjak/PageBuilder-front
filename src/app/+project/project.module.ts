import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectShowComponent } from './project-show/project-show.component';
import { MomentModule } from 'angular2-moment';
import { TreeModule } from 'angular-tree-component';
import { EditorComponent } from './editor/editor.component';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
import { CodeMirrorDirective } from './code-mirror.directive';
import { FileComponent } from './file/file.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilesService } from './files.service';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';
import { SettingsService } from './settings.service';
import { GitBarComponent } from './git-bar/git-bar.component';
import { GitService } from './git.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProjectRoutingModule,
    MomentModule,
    ModalModule,
    TreeModule,
    TabsModule,
  ],
  declarations: [ProjectShowComponent, EditorComponent, CodeMirrorDirective, FileComponent, SettingsModalComponent, GitBarComponent],
  providers: [FilesService, SettingsService, GitService],
})
export class ProjectModule { }
