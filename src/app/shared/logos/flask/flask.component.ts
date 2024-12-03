import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-flask',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './flask.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlaskComponent {
  @Input() class = "";
}
