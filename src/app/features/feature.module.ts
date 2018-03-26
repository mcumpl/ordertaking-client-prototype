import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureService } from './services/feature.service';
import { FeatureDirective } from './directives/feature.directive';

import { DynamicComponent } from './components/dynamic.component';

import { Feature1Component } from './components/feature1.component';
import { Feature2Component } from './components/feature2.component';
import { Feature3Component } from './components/feature3.component';


@NgModule({
  imports: [CommonModule],
  declarations: [FeatureDirective, DynamicComponent, Feature1Component, Feature2Component, Feature3Component],
  exports: [FeatureDirective, DynamicComponent, Feature1Component, Feature2Component, Feature3Component],
  entryComponents: [
    Feature1Component, Feature2Component, Feature3Component
  ]
})
export class FeatureModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FeatureModule,
      providers: [FeatureService],
    };
  }
}
