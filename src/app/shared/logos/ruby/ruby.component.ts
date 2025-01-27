import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-ruby',
  standalone: true,
  imports: [],
  templateUrl: './ruby.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RubyComponent {
  @Input() class = '';
}
