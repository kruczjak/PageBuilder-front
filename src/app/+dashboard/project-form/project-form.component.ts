import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  public projectForm: FormGroup;
  @Output() afterSubmit = new EventEmitter<boolean>();
  
  constructor(private fb: FormBuilder, private projectsService: ProjectsService) {
    this.createForm()
  }

  createForm() {
    this.projectForm = this.fb.group({
      name: '',
    });
  }

  ngOnInit() {
  }
  
  onSubmit() {
    this.projectsService.create(this.projectForm.value)
      .subscribe((json)=>this.afterSubmit.emit(true));
  }


}
