import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Parse from 'parse';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectName: string;
  projectCode: string;
  object: any;
  ProjectList = Parse.Object.extend('ProjectList');
  projectList = new this.ProjectList();
  docList = [];
  flag = false;
  DocumentList = Parse.Object.extend('DocumentList');
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectName = params.get('projectName');
      //console.log(this.projectName);
      this.getDetail();
    });
  }
  async getDetail() {
    const query = new Parse.Query(this.projectList);

    query.equalTo('projectName', this.projectName);
    const projects = await query.find();
    // alert('Successfully retrieved ' + projects.length);
    this.object = projects[0];
    this.projectCode = this.object.get('projectCode');
    console.log(this.projectCode);
    let documentList = new this.DocumentList();
    let query2 = new Parse.Query(documentList);
    query2.equalTo('projectName', this.projectName);
    const docResult = await query2.find();
    if (docResult.length > 0) {
      this.flag = true;
    }
    for (let i = 0; i < docResult.length; i++) {
      var object = docResult[i];

      this.docList.push({
        objectId: object.id,
        documentName: object.get('documentName'),
        revisionNumber: object.get('revisionNumber'),
        projectName: object.get('projectName'),
        status: object.get('status')
      });
    }
  }
  updateProject(projCode, projName) {
    if (this.object) {
      const query = new Parse.Query(this.projectList);
      query.get(this.object.id).then(
        project => {
          project.set('projectName', projName);
          project.set('projectCode', projCode);
          project.save();
          console.log('Updated successfully');
        },
        error => {
          console.log('Error');
        }
      );
    }
  }
}
