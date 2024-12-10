import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'clients-alliances-sliders',
  standalone: true,
  imports: [],
  templateUrl: './clients-alliances.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsAlliancesComponent {
  rutaclientes: string = 'assets/img/socios/clientes';
  rutaalianzas: string = 'assets/img/socios/alianzas';
  clientes: string[] = [];
  alianzas: string[] = [];

  constructor() {
    this.mostrarimg();
  }

  mostrarimg() {
    for (let i = 1; i <= 29; i++) {
      this.clientes.push(this.rutaclientes + '/' + i + '.png');
      if (i <= 10) this.alianzas.push(this.rutaalianzas + '/' + i + '.png');
    }
  }
}
