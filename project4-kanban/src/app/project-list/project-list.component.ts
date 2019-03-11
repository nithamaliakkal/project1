import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { ProjectStructure } from '../projectStructure';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projList = [];
  ProjectList = Parse.Object.extend('ProjectList');
  projectList = new this.ProjectList();

  constructor() {}

  ngOnInit() {
    this.projectlist();
  }
  async projectlist() {
    const query = new Parse.Query(this.projectList);
    query.exists('projectName');
    const projects = await query.find();

    for (let i = 0; i < projects.length; i++) {
      var object = projects[i];

      this.projList.push({
        projCode: object.get('projectCode'),
        projName: object.get('projectName')
      });
    }
    console.log(this.projList);
  }
  createProject(projectCode, projectName) {
    this.projectList.set('projectCode', projectCode);
    this.projectList.set('projectName', projectName);
    this.projectList.save().then(
      result => {
        alert('New object created with objectId: ' + result.id);
      },
      error => {
        alert('Failed to create new object, with error code: ' + error.message);
      }
    );
  }
}
