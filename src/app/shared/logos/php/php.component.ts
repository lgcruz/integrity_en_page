import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-php',
  standalone: true,
  imports: [],
  templateUrl: './php.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhpComponent {
  @Input() class = '';
}
