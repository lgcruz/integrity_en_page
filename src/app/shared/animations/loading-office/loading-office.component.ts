import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
    selector: 'app-loading-office',
    standalone: true,
    imports: [
        CommonModule, LottieComponent
    ],
    templateUrl: './loading-office.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingOfficeComponent {
  options: AnimationOptions = {
    path: 'assets/lotties/loading.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
