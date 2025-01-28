import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-glue',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './glue.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlueComponent {
  @Input() class = "";
}
