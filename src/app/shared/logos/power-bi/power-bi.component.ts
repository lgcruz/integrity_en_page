import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-power-bi',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './power-bi.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PowerBiComponent {
  @Input() class = "";
}
