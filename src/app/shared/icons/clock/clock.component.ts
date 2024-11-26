import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'icon-clock',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './clock.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent { }
