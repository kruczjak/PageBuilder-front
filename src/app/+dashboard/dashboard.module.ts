import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ModalModule } from "ngx-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ModalModule,
    ReactiveFormsModule,
  ],
  declarations: [DashboardIndexComponent, ProjectFormComponent]
})
export class DashboardModule { }
