import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-thymeleaf',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './thymeleaf.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThymeleafComponent {
  @Input() class = "";
}
