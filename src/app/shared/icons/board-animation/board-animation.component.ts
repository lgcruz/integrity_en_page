import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-board-animation',
  standalone: true,
  imports: [],
  templateUrl: './board-animation.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardAnimationComponent { }
