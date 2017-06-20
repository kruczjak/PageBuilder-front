import { Component, Input } from '@angular/core';
import { GitService } from '../git.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-git-bar',
  templateUrl: './git-bar.component.html',
  styleUrls: ['./git-bar.component.css']
})
export class GitBarComponent {
  @Input() public projectId: number;

  constructor(private git: GitService, private toaster: ToasterService) { }

  public commit() {
    this.git.commit(this.projectId).subscribe(() => this.toaster.pop('success', 'Commit created'));
  }

  public push() {
    this.git.push(this.projectId).subscribe(() => this.toaster.pop('success', 'Pushing to git remote started...'));
  }

  public pull() {
    this.git.pull(this.projectId).subscribe(() => this.toaster.pop('success', 'Pulling from git remote started...'));
  }

  public deploy() {
    this.git.deploy(this.projectId).subscribe(() => this.toaster.pop('success', 'Deploy started...'));
  }
}
