import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-netcore',
  standalone: true,
  imports: [],
  templateUrl: './netcore.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetcoreComponent {
  @Input() class = '';
}
