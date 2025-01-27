import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-python',
  standalone: true,
  imports: [],
  templateUrl: './python.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PythonComponent {
  @Input() class = '';
}
