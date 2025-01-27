import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-sybase',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sybase.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SybaseComponent {
  @Input() class = "";
}
