import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectShowComponent } from './project-show/project-show.component';

const routes: Routes = [
  { path: ':id', component: ProjectShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
