import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import {
  moveItemInArray,
  CdkDragDrop,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  newItems = [
    { item: 'Item 0', owner: 'JAIN' },
    { item: 'Item 1', owner: 'JAIN' },
    { item: 'Item 2', owner: 'JAIN' },
    { item: 'Item 3', owner: 'JAIN' }
  ];
  activeItems = [{ item: 'Item 4', owner: 'JAIN' }];
  doneItems = [
    { item: 'Item 5', owner: 'JAIN' },
    { item: 'Item 6', owner: 'JAIN' },
    { item: 'Item 7', owner: 'JAIN' }
  ];

  modalRef: BsModalRef;
  currentData: any;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.currentData);
    console.log(this.currentData);
  }
  updateCard(itemOwner) {
    console.log(itemOwner);
    this.currentData.owner = itemOwner;
  }
  dropped(event: CdkDragDrop<string[]>) {
    console.log(event.item.data);
    this.currentData = event.item.data;

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
