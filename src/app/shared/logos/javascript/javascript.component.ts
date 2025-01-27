import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-javascript',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './javascript.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JavascriptComponent {
  @Input() class = "";
 }
