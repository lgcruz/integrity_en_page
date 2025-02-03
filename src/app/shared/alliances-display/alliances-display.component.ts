import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SliderProComponent } from "../slider-pro/slider-pro.component";

@Component({
  selector: 'alliances-display',
  standalone: true,
  imports: [
    CommonModule,
    SliderProComponent
],
  templateUrl: './alliances-display.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlliancesComponent {
  rutaalianzas: string = 'assets/img/socios/alianzas';
  alianzas: string[] = [];

  constructor() {
    this.mostrarimg();
  }

  mostrarimg() {
    for (let i = 1; i <= 10; i++) {
      this.alianzas.push(this.rutaalianzas + '/' + i + '.png');
    }
  }
}
