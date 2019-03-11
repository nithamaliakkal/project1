import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  ProjectList = Parse.Object.extend('ProjectList');
  projectList = new this.ProjectList();
  a = 8;
  b = 8;
  v = 0;
  k = 'fhjfgfg';
  constructor() {}

  ngOnInit() {}
}
