import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { StepComponent } from "@cemex/cmx-steps-v2/dist/components/step.component";
import { StepsService } from "@cemex/cmx-steps-v2/dist/services/steps.service";

@Component({
  selector: 'product-selection',
  templateUrl: './product-selection.html',
  styleUrls: ['./product-selection.scss']
})
export class ProductSelectionStepComponent extends StepComponent {
  @Output() onCompleted = new EventEmitter<any>();
  @Output() requestNext = new EventEmitter<any>();

  constructor() {
    super();
  }

  afterEnter() {

  }
}
