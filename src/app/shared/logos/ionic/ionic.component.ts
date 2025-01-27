import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-ionic',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ionic.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IonicComponent {
  @Input() class = "";
}
