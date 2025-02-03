import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SliderProComponent } from "../slider-pro/slider-pro.component";

@Component({
  selector: 'clients-display',
  standalone: true,
  imports: [SliderProComponent],
  templateUrl: './clients-display.component.html',
  styles: `
    :host {
      display: block;
    }
    .slider {
      height: var(--height);
    }
    .slider .list {

    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsAlliancesComponent {
  rutaclientes: string = 'assets/img/socios/clientes';
  clientes: string[] = [];
  renderStamp = Date.now()

  constructor() {
    this.mostrarimg();
  }

  mostrarimg() {
    for (let i = 1; i <= 29; i++) {
      this.clientes.push(this.rutaclientes + '/' + i + '.png');
    }
  }
}
