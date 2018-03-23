import { Injectable } from '@angular/core';
@Injectable()
export class CountryService {
  private _country: string;

  constructor() {
    this._country = localStorage.getItem('userFromCountry');
  }

  get country() {
    return this._country;
  }

  set country(country: string) {
    this._country = country;
    localStorage.setItem('userFromCountry', country);
  }

  hasPermission(countries: string[]): boolean {
    if (!countries || (Array.isArray(countries) && countries.length === 0)) {
      return true;
    }

    if (Array.isArray(countries)) {
      return this.hasArrayPermission(countries);
    } else {
      countries = [countries];
      return this.hasArrayPermission(countries);
    }
  }

  hasArrayPermission(countries: string[]) {
    return true;
  }
}
