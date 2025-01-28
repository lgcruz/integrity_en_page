import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-selenium',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './selenium.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeleniumComponent {
  @Input() class = "";
}
