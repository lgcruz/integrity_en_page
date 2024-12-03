import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-postman',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './postman.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostmanComponent {
  @Input() class = "";
}
