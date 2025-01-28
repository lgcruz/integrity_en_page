import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-spring',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './spring.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpringComponent {
  @Input() class = "";
}
