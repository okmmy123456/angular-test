import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { PrhdService } from 'src/app/shared/prhd.service';
import { PrlnService } from 'src/app/shared/prln.service';

@Component({
  selector: 'app-pur-pr-list-assign-com2',
  templateUrl: './pur-pr-list-assign-com2.component.html',
  styleUrls: ['./pur-pr-list-assign-com2.component.css']
})
export class PurPrListAssignCom2Component implements OnInit {

  items: Array<any> = [];
  newItem: any = {};

  constructor(public PrhdService: PrhdService,
    public PrlnService:PrlnService) {}

  ngOnInit(): void {
   // this.PrlnService.indexArr = 1
    this.PrhdService.feedDataSection()
    this.PrhdService.feedDataSite()
    this.PrlnService.feedDataUnit()
  }
}
