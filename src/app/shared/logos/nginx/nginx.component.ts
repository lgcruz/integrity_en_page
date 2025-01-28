import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-nginx',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './nginx.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NginxComponent {
  @Input() class = "";
}
