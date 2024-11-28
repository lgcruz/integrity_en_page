import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-box-animation',
  standalone: true,
  imports: [],
  templateUrl: './box-animation.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxAnimationComponent {}
