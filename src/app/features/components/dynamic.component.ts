import { Component, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'dynamic-component',
  template: `<template #dynamicComponent></template>`
})
export class DynamicComponent {
  @Input() contentComponent: any;
  @ViewChild('dynamicComponent', { read: ViewContainerRef })

  dynamicComponent: any;

  constructor(private componentResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    const factory = this.componentResolver.resolveComponentFactory(this.contentComponent);

    this.dynamicComponent.createComponent(factory);
  }
}
