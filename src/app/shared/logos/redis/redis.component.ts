import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-redis',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './redis.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedisComponent {
  @Input() class = "";
}
