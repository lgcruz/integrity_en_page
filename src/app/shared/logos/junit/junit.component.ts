import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-junit',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './junit.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JunitComponent {
  @Input() class = "";
}
