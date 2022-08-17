import { Component, OnInit } from '@angular/core';
import { PrlnService } from '../../shared/prln.service';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css']
})
export class Com1Component implements OnInit {

  constructor( public PrlnService:PrlnService) { }

  ngOnInit() {
  }

}