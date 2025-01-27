import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-swift',
  standalone: true,
  imports: [],
  templateUrl: './swift.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiftComponent {
  @Input() class = '';
}
