import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-azure',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './azure.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AzureComponent {
  @Input() class = "";
 }
