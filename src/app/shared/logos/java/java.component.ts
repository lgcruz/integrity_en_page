import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-java',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './java.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JavaComponent {
  @Input() class = "";
}
