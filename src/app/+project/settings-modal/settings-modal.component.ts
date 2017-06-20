import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.css']
})
export class SettingsModalComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;
  @Input() public projectId: number;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private settingsService: SettingsService, private toaster: ToasterService) {
    this.form = formBuilder.group({ 'git_remote_url': '', 'git_sshkey': '' });
  }

  public ngOnInit() {
    this.settingsService.get(this.projectId).subscribe((json) => this.form.patchValue(json));
  }

  public onSubmit() {
    this.settingsService.update(this.projectId, this.form.value).subscribe(
      (json) => {
        this.toaster.pop('success', 'Settings saved correctly');
        this.closeModal();
      },
      () => this.toaster.pop('error', 'Error while saving settings'),
    );
  }

  public closeModal() {
    this.childModal.hide();
  }

  public showModal() {
    this.childModal.show();
  }

}
