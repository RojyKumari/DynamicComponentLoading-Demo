import { Component, OnInit } from '@angular/core';
import { MasterComponent } from '../master-component';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements MasterComponent {

  data: any;

  constructor() { }

}
