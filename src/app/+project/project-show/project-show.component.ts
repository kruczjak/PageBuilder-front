import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectsService } from '../../projects.service';
import { Observable } from 'rxjs/Observable';
import { EditorComponent } from '../editor/editor.component';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-project-show',
  templateUrl: './project-show.component.html',
  styleUrls: ['./project-show.component.css']
})
export class ProjectShowComponent implements OnInit {
  @ViewChild(EditorComponent) public editorComponent: EditorComponent;
  public project: any;
  public directoryListObservable: Observable<any>;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService, private toaster: ToasterService) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.projectsService.show(params['id']))
      .subscribe((json) => {
        this.project = json;
        this.refreshDirectoryList();
      });
  }

  public onItemActivated($event) {
    if ($event.node.isRoot || !$event.node.isLeaf) { return; }
    const path = this.buildFilePath($event.node).substring(1);

    this.editorComponent.addFile($event.node.data.name, path);
  }

  public regenerateProject() {
    this.projectsService.regenerateProject(this.project.id).subscribe(
      () => this.toaster.pop('success', 'Project regeneration started')
    );
  }

  public refreshDirectoryList() {
    this.directoryListObservable = this.projectsService.listDirectories(this.project.id);
  }

  public openSettings() {

  }

  private buildFilePath(node): string {
    if (node.isRoot) { return ''; }
    return !!node.parent ? `${this.buildFilePath(node.parent)}/${node.data.name}` : node.data.name;
  }
}
