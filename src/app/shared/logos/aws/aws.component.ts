import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-aws',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './aws.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwsComponent {
  @Input() class = "";
 }
