import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { ProjectListComponent } from '../project-list/project-list.component';
@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {
  ProjectList = Parse.Object.extend('ProjectList');
  projectList = new this.ProjectList();
  DocumentList = Parse.Object.extend('DocumentList');
  documentList = new this.DocumentList();
  projList = [];
  constructor() {}

  ngOnInit() {
    this.projectlist();
  }
  async projectlist() {
    const query = new Parse.Query(this.projectList);
    query.exists('projectName');
    const projects = await query.find();

    for (let i = 0, j = 0; i < projects.length; i++, j++) {
      const object = projects[i];

      this.projList.push({
        projCode: object.get('projectCode'),
        projName: object.get('projectName')
      });
    }
  }
  createDoc(docName, revNumber, status, projectName) {
    this.documentList.set('documentName', docName);
    this.documentList.set('revisionNumber', revNumber);
    this.documentList.set('projectName', projectName);
    this.documentList.set('status', status);
    this.documentList.save().then(
      result => {
        //alert('New object created with objectId: ' + result.id);
      },
      error => {
        alert('Failed to create new object, with error code: ' + error.message);
      }
    );
  }
}
