import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { FeatureService } from '../services/feature.service';

@Directive({
  selector: '[featureToggle]',
})
export class FeatureDirective implements OnInit {
  @Input() featureToggle: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private featureService: FeatureService,
  ) {}

  ngOnInit() {
    if (this.isEnabled()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  isEnabled() {
    const config = this.featureService.featuresByProduct;
    if (this.featureToggle in config) {
      return config[this.featureToggle];
    }
    return false;
  }
}
