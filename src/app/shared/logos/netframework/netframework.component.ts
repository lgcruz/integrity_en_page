import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-netframework',
  standalone: true,
  imports: [],
  templateUrl: './netframework.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetframeworkComponent {
  @Input() class = '';
}
