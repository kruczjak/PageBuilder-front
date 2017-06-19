import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public tabs: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
  }

  public addFile(path: string) {
    this.tabs.push({ title: path });
    this.setActiveTab(this.tabs.length - 1);
  }
}
