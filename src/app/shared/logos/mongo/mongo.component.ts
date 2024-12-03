import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-mongo',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './mongo.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MongoComponent {
  @Input() class = "";
}
