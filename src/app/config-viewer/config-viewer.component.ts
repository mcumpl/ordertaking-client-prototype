import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'config-viewer',
  templateUrl: './config-viewer.component.html',
  styleUrls: ['./config-viewer.component.scss'],
})
export class ConfigViewerComponent implements OnInit, OnChanges {

  @Input() country = 'US';

  config: any;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.config = this.getConfigFile();
  }

  ngOnChanges() {
    this.config = this.getConfigFile();
  }

  getConfigFile() {
    if (this.country) {
      return this.http
        .get(
          `assets/features/ft-${this.country.toLowerCase()}.json`,
      )
        .map(res => res);
    } else {
      throw new Error("No country selected");
    }
  }
}
