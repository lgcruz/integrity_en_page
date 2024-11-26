import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-wrench',
  standalone: true,
  imports: [],
  templateUrl: './wrench.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrenchComponent {}
