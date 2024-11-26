import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-trend-up',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './trend-up.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendUpComponent { }
