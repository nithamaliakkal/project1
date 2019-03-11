import { Component, OnInit, TemplateRef } from '@angular/core';
import * as Parse from 'parse';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  moveItemInArray,
  CdkDragDrop,
  transferArrayItem
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  waiting = [];
  inprogress = [];
  verify = [];
  released = [];
  modalRef: BsModalRef;
  currentData: any;
  currentContainer: any;
  DocumentList = Parse.Object.extend('DocumentList');
  currentStatus: string;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.getdata();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.currentData);
    console.log(this.currentData);
  }
  async updateCard(revnumber) {
    console.log(this.currentContainer);
    console.log(this.currentData.objectId);
    if (this.currentContainer == 'cdk-drop-0') {
      this.currentStatus = 'Started';
    } else if (this.currentContainer == 'cdk-drop-1') {
      this.currentStatus = 'In progress';
    } else if (this.currentContainer == 'cdk-drop-2') {
      this.currentStatus = 'Checked';
    } else if (this.currentContainer == 'cdk-drop-3') {
      this.currentStatus = 'Released';
    }
    console.log(this.currentStatus);
    let documentList = new this.DocumentList();
    let query = new Parse.Query(documentList);
    let ID = this.currentData.objectId;
    query.get(ID).then(
      project => {
        project.set('revisionNumber', revnumber);
        project.set('status', this.currentStatus);
        project.save();
        console.log('Updated successfully');
      },
      error => {
        console.log('Error');
      }
    );
  }
  dropped(event: CdkDragDrop<string[]>) {
    this.currentData = event.item.data;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.currentContainer = event.container.id;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  async getdata() {
    let documentList = new this.DocumentList();
    let query = new Parse.Query(documentList);
    query.equalTo('status', 'Started');
    let data = await query.find();

    for (let i = 0; i < data.length; i++) {
      var object = data[i];

      this.waiting.push({
        objectId: object.id,
        documentName: object.get('documentName'),
        revisionNumber: object.get('revisionNumber'),
        projectName: object.get('projectName'),
        status: object.get('status')
      });
    }
    documentList = new this.DocumentList();
    query = new Parse.Query(documentList);
    query.equalTo('status', 'In progress');
    data = await query.find();

    for (let i = 0; i < data.length; i++) {
      object = data[i];

      this.inprogress.push({
        objectId: object.id,
        documentName: object.get('documentName'),
        revisionNumber: object.get('revisionNumber'),
        projectName: object.get('projectName'),
        status: object.get('status')
      });
    }
    documentList = new this.DocumentList();
    query = new Parse.Query(documentList);
    query.equalTo('status', 'Checked');
    data = await query.find();

    for (let i = 0; i < data.length; i++) {
      object = data[i];

      this.verify.push({
        objectId: object.id,
        documentName: object.get('documentName'),
        revisionNumber: object.get('revisionNumber'),
        projectName: object.get('projectName'),
        status: object.get('status')
      });
    }
    documentList = new this.DocumentList();
    query = new Parse.Query(documentList);
    query.equalTo('status', 'Released');
    data = await query.find();

    for (let i = 0; i < data.length; i++) {
      object = data[i];

      this.released.push({
        objectId: object.id,
        documentName: object.get('documentName'),
        revisionNumber: object.get('revisionNumber'),
        projectName: object.get('projectName'),
        status: object.get('status')
      });
    }
  }
}
