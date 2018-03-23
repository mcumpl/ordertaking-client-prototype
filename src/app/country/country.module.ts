import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './services/country.service';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FormatDatePipe],
  exports: [FormatDatePipe]
})
export class CountryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CountryModule,
      providers: [CountryService]
    };
  }
}
