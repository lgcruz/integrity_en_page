import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-s3bucket',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './s3bucket.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class S3bucketComponent {
  @Input() class = "";
}
