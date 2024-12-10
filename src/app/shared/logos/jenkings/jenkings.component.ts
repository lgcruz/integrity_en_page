import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-jenkings',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './jenkings.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JenkingsComponent {
  @Input() class = "";
 }
