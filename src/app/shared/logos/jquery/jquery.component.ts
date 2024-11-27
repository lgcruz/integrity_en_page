import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-jquery',
  standalone: true,
  imports: [],
  templateUrl: './jquery.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JqueryComponent {
  @Input() class = '';
}
