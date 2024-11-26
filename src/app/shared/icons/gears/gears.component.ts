import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-gears',
  standalone: true,
  imports: [],
  templateUrl: './gears.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GearsComponent {}
