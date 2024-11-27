import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-vue',
  standalone: true,
  imports: [],
  templateUrl: './vue.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VueComponent {
  @Input() class = '';
}
