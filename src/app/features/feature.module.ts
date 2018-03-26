import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureService } from './services/feature.service';
import { FeatureDirective } from './directives/feature.directive';

import { DynamicComponent } from './components/dynamic.component';

import { ReadyMixComponent } from './components/readymix.component';
import { AggregatesComponent } from './components/aggregates.component';
import { CementComponent } from './components/cement.component';


@NgModule({
  imports: [CommonModule],
  declarations: [FeatureDirective, DynamicComponent, ReadyMixComponent, AggregatesComponent, CementComponent],
  exports: [FeatureDirective, DynamicComponent, ReadyMixComponent, AggregatesComponent, CementComponent],
  entryComponents: [
    ReadyMixComponent, AggregatesComponent, CementComponent
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
