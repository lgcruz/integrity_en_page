import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent {}
