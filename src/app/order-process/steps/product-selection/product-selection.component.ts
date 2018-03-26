import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { StepComponent } from "@cemex/cmx-steps-v2/dist/components/step.component";
import { StepsService } from "@cemex/cmx-steps-v2/dist/services/steps.service";
import { FeatureService } from '../../../features/services/feature.service';

@Component({
  selector: 'product-selection',
  templateUrl: './product-selection.html',
  styleUrls: ['./product-selection.scss']
})
export class ProductSelectionStepComponent extends StepComponent {
  @Output() onCompleted = new EventEmitter<any>();
  @Output() requestNext = new EventEmitter<any>();
  @Input() country: string;


  fields = [];

  constructor(
    private featureService: FeatureService,
  ) {
    super();
  }

  ngOnChanges() {
    this.getConfig();
  }

  afterEnter() {
    this.getConfig();
  }

  getConfig() {
    this.featureService.getFeaturesForCountry().subscribe(features => {
      this.fields = (features as any).productLineSelection.availableProductLines;
    });
  }
}
