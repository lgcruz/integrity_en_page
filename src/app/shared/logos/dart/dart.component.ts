import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-dart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dart.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DartComponent {
@Input() class = "";
}
