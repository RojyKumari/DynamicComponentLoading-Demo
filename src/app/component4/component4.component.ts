import { Component, OnInit } from '@angular/core';
import { MasterComponent } from '../master-component';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements MasterComponent {

  data: any;

  constructor() { }

}
