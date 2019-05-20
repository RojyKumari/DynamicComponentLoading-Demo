import { Component, OnInit } from '@angular/core';
import { MasterComponent } from '../master-component';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements MasterComponent {

  data:any;

  constructor() { }



}
