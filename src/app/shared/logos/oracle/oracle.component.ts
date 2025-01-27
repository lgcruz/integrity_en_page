import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-oracle',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './oracle.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OracleComponent {
  @Input() class = "";
 }
