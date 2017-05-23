import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {
  public projectsObservable = this.projectsService.index();

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
  }

}
