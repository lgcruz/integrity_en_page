import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-adobe-xd',
  standalone: true,
  imports: [],
  templateUrl: './adobe-xd.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdobeXdComponent {
  @Input() class = '';
}
