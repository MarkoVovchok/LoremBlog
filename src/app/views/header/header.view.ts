import { Component, OnInit, EventEmitter, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PostFormView } from '../post-form/post-form.view';

@Component({
  selector: 'header',
  templateUrl: './header.html'

})
export class HeaderView {

  public modalRef: BsModalRef; 

  constructor(private modalService: BsModalService) { }

  public openModal() {
    this.modalRef = this.modalService.show(PostFormView);
  }
}
