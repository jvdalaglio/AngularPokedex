import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onboarding-steps',
  templateUrl: './onboarding-steps.component.html',
  styleUrls: ['./onboarding-steps.component.scss'],
  providers: [{provide: CdkStepper, useExisting: OnboardingStepsComponent}],
})

export class OnboardingStepsComponent extends CdkStepper implements OnInit {

  ngOnInit(): void {
    console.log(this.steps.changes)
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
