import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { StepComponent } from "@cemex/cmx-steps-v2/dist/components/step.component";
import { StepsService } from "@cemex/cmx-steps-v2/dist/services/steps.service";

@Component({
  selector: 'delivery-selection',
  templateUrl: './delivery-selection.html',
  styleUrls: ['./delivery-selection.scss']
})
export class DeliverySelectionStepComponent extends StepComponent {
  @Output() onCompleted = new EventEmitter<any>();
  @Output() requestNext = new EventEmitter<any>();

  constructor() {
    super();
  }

  afterEnter() {

  }
}
