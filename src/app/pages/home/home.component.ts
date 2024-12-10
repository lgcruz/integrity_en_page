import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CircuitComponent } from '@shared/icons/circuirt/circuit.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselComponent, CircuitComponent],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
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
