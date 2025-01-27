import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-flutter',
  standalone: true,
  imports: [],
  templateUrl: './flutter.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlutterComponent {
  @Input() class = '';
}
