import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { PagesRoutingModule } from './pages-routing.module';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { OnboardingStepsComponent } from './onboarding/onboarding-steps/onboarding-steps.component';



@NgModule({
  declarations: [
    SplashComponent,
    OnboardingComponent,
    OnboardingStepsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule { }
