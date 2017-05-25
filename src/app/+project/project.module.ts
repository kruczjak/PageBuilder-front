import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectShowComponent } from './project-show/project-show.component';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MomentModule,
  ],
  declarations: [ProjectShowComponent]
})
export class ProjectModule { }
