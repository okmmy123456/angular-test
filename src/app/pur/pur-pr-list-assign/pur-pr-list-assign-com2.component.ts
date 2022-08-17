import { Component, OnInit, Output, ViewChild } from '@angular/core';

import { PrlnService } from './'
@Component({
  selector: 'app-pur-pr-list-assign-com2',
  templateUrl: './pur-pr-list-assign-com2.component.html',
  styleUrls: ['./pur-pr-list-assign-com2.component.css']
})
export class PurPrListAssignCom2Component implements OnInit {

  items: Array<any> = [];
  newItem: any = {};

  constructor(
    public PrlnService:PrlnService) {}

  ngOnInit(): void {
   // this.PrlnService.indexArr = 1
    this.PrlnService.feedDataUnit()
  }
}
