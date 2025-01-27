import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-kotlin',
  standalone: true,
  imports: [],
  templateUrl: './kotlin.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KotlinComponent {
  @Input() class = '';
}
