import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-jmeter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './jmeter.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JmeterComponent {
  @Input() class = "";
}
