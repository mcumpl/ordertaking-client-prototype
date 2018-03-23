import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { CountryService } from '../../country/services/country.service';

@Injectable()
export class FeatureService {
  public featuresForCountry: BehaviorSubject<any> = new BehaviorSubject<any>({});
  finalFeatures: any;

  constructor(
    private countryService: CountryService,
    private http: HttpClient,
  ) { }

  getFeaturesForCountry() {
    if (this.countryService.country) {
      return this.http
        .get(
          `assets/features/ft-${this.countryService.country.toLowerCase()}.json`,
      )
        .map(res => res);
    } else {
      return this.http.get(`assets/features/ft-us.json`).map(res => res);
    }
  }

  set featuresByProduct(productType) {
    this.featuresForCountry.subscribe(countryFeatures => {
      for (const products in countryFeatures) {
        if (products === productType) {
          this.finalFeatures = countryFeatures[products];
        }
      }
    });
  }

  get featuresByProduct() {
    return this.finalFeatures;
  }

  canFeatureBeDisplayed(feature: string): boolean {
    if (this.finalFeatures) {
      if (feature in this.finalFeatures) {
        return this.finalFeatures[feature];
      }

      return false;
    }
  }
}
