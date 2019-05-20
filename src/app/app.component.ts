import { Component, OnInit, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MasterComponent } from './master-component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { ComponenthostDirective } from './componenthost.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'DynamicComponentLoading';

  component: any[];
  interval:any;
  componentRef:any;

  @ViewChild(ComponenthostDirective) componentHost: ComponenthostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver){}

  ngOnInit(){
    this.component = [Component1Component, Component2Component, Component3Component, Component4Component ];
    this.getComponent();
  }

  ngOnDestroy(){
    this.componentRef.destroy();
  }

  loadComponent(index:number){
    this.componentHost.viewContainerRef.clear();
    let item = this.component[index];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(item);

    this.componentRef = this.componentHost.viewContainerRef.createComponent(componentFactory);
  }

  getComponent() {
    let index = 0;
    this.interval = setInterval(()=>{
      index = Math.ceil(Math.random() * 3);
      this.loadComponent(index);
    }, 2000);
  }

}
