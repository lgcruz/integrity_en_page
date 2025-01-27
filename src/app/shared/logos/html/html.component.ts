import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-html',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './html.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlComponent {
  @Input() class = "";
 }
