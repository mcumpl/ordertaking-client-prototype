import { Component, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { ReadyMixComponent } from './readymix.component';
import { AggregatesComponent } from './aggregates.component';
import { CementComponent } from './cement.component';

const components = {
  "ReadyMix": ReadyMixComponent,
  "Aggregates": AggregatesComponent,
  "Cement": CementComponent
};

@Component({
  selector: 'dynamic-component',
  template: `<template #dynamicComponent></template>`,
})
export class DynamicComponent {
  @Input() content: any;
  @ViewChild('dynamicComponent', { read: ViewContainerRef })

  dynamicComponent: any;

  constructor(private componentResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {

    if (!components[this.content]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.content}).
        Supported types: ${supportedTypes}`
      );
    }

    const factory = this.componentResolver.resolveComponentFactory(components[this.content]);
    this.dynamicComponent.createComponent(factory);
  }
}
