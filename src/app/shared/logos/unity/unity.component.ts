import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-unity',
  standalone: true,
  imports: [],
  templateUrl: './unity.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnityComponent {
  @Input() class = '';
}
