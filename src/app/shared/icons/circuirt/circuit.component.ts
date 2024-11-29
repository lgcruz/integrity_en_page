import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-circuit',
  standalone: true,
  imports: [],
  templateUrl: './circuit.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircuitComponent {}
