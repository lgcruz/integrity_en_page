import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-openshift',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './openshift.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenshiftComponent {
  @Input() class = "";
}
