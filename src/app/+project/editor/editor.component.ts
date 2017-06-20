import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() public projectId: number;
  @Output() public refreshList = new EventEmitter<boolean>();
  public tabs: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
  }

  public addFile(title: string, path: string) {
    const existingTab = this.tabs.findIndex((tab) => tab['path'] === path);

    if (existingTab !== -1) {
      this.setActiveTab(existingTab);
      return;
    }

    this.tabs.push({ title: title, path: path });
    this.setActiveTab(this.tabs.length - 1);
  }

  public removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  public onFileRemoved(index: number) {
    this.removeTab(index);
    this.refreshList.emit(true);
  }
}
