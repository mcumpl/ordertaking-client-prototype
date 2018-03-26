import { Component } from '@angular/core';
import { CountryService } from './country/services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Order Wizard Prototype';
  selectedCountry = 'US';

  constructor(
    private countryService: CountryService,
  ) { }

  handleChangeCountry(event) {
    this.selectedCountry = event.target.value;
    this.countryService.country = this.selectedCountry;
  }

  handleFinish() {
    console.log('All steps finished');
  }

  handleExit() {
    console.log('Process exited');
  }
}
