import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponenthost]'
})
export class ComponenthostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
