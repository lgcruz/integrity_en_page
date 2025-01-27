import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-figma',
  standalone: true,
  imports: [],
  templateUrl: './figma.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FigmaComponent {
  @Input() class = '';
}
