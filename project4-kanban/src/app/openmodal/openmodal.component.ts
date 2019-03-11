import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-openmodal',
  templateUrl: './openmodal.component.html',
  styleUrls: ['./openmodal.component.css']
})
export class OpenmodalComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}
  //   openModal(template: TemplateRef<any>) {
  //     this.modalRef = this.modalService.show(template);
  //   }
}
