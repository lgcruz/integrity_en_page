import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-bitbucket',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './bitbucket.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BitbucketComponent {
  @Input() class = "";
}
