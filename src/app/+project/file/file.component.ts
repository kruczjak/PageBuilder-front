import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilesService } from '../files.service';
import { Subscription } from 'rxjs/Subscription';
import { ToasterService } from 'angular2-toaster';
import { isBoolean } from 'util';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() public projectId: number;
  @Input() public path: string;
  @Output() public remove = new EventEmitter<boolean>();
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private filesService: FilesService, private toaster: ToasterService) {
    this.form = this.formBuilder.group({ file: '' });
  }

  public ngOnInit() {
    this.filesService.get(this.projectId, this.path).subscribe((json) => this.form.get('file').patchValue(json['content']));
  }

  public onSubmit() {
    this.filesService.update(this.projectId, this.path, this.form.get('file').value).subscribe(
      (json) => this.toaster.pop('success', 'File successfully saved'),
      (response) => this.toaster.pop('error', 'Error while saving file'),
    );
  }

  public removeFile() {
    this.filesService.removeFile(this.projectId, this.path).subscribe(
      (json) => {
        this.toaster.pop('success', 'File successfully removed');
        this.remove.emit(true);
      },
      (response) => this.toaster.pop('error', 'Error while deleting file'),
    );
  }

}
