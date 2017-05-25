import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-project-show',
  templateUrl: './project-show.component.html',
  styleUrls: ['./project-show.component.css']
})
export class ProjectShowComponent implements OnInit {
  public project: any;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.projectsService.show(params['id']))
      .subscribe((json) => this.project = json);
  }
}
