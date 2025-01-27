import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-nodejs',
  standalone: true,
  imports: [],
  templateUrl: './nodejs.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodejsComponent {
  @Input() class = '';
}
