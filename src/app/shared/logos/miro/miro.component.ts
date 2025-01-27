import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-miro',
  standalone: true,
  imports: [],
  templateUrl: './miro.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiroComponent {
  @Input() class = '';
}
