import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-trend-down',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './trend-down.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendDownComponent { }
