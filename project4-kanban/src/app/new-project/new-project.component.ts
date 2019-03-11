import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  ProjectList = Parse.Object.extend('ProjectList');
  projectList = new this.ProjectList();
  constructor() {}

  ngOnInit() {}
  createProject(projectCode, projectName) {
    this.projectList.set('projectCode', projectCode);
    this.projectList.set('projectName', projectName);
    this.projectList.save().then(
      result => {
        // alert('New object created with objectId: ' + result.id);
      },
      error => {
        alert('Failed to create new object, with error code: ' + error.message);
      }
    );
  }
}
