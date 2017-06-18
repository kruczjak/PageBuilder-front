import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectsService } from '../../projects.service';
import { Observable } from 'rxjs/Observable';
import { FileComponent } from '../file/file.component';
import { EditorComponent } from '../editor/editor.component';
import { Editor } from 'codemirror';

@Component({
  selector: 'app-project-show',
  templateUrl: './project-show.component.html',
  styleUrls: ['./project-show.component.css']
})
export class ProjectShowComponent implements OnInit {
  @ViewChild(EditorComponent) public editorComponent: EditorComponent;
  public project: any;
  public directoryListObservable: Observable<any>;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.projectsService.show(params['id']))
      .subscribe((json) => {
        this.project = json;
        this.directoryListObservable = this.projectsService.listDirectories(this.project.id)
      });
  }

  public onItemActivated($event) {
    console.log($event);
    if ($event.node.isRoot) return;

    this.editorComponent.addFile('testing');
  }
}
