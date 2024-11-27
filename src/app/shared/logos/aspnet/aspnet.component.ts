import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-aspnet',
  standalone: true,
  imports: [],
  templateUrl: './aspnet.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspnetComponent {
  @Input() class = '';
}
