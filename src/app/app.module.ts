import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StepsModule } from '@cemex/cmx-steps-v2';

import { FeatureModule } from './features/feature.module';
import { CountryModule } from './country/country.module';

import { AppComponent } from './app.component';
import { ProductSelectionStepComponent } from './order-process/steps/product-selection/product-selection.component';
import { DeliverySelectionStepComponent } from './order-process/steps/delivery-selection/delivery-selection.component';
import { LocationSelectionStepComponent } from './order-process/steps/location-selection/location-selection.component';
import { ActionFooterComponent } from './action-footer/action-footer.component';
import { ConfigViewerComponent } from './config-viewer/config-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductSelectionStepComponent,
    DeliverySelectionStepComponent,
    ActionFooterComponent,
    ConfigViewerComponent,
    LocationSelectionStepComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StepsModule,
    CountryModule.forRoot(),
    FeatureModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
