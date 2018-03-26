import { Component, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { Feature1Component } from './feature1.component';
import { Feature2Component } from './feature2.component';
import { Feature3Component } from './feature3.component';

const components = {
  feature1: Feature1Component,
  feature2: Feature2Component,
  feature3: Feature3Component
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
