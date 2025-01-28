import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-lambda',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lambda.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LambdaComponent {
  @Input() class = "";
}
