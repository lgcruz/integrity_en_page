import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SliderProComponent } from "../slider-pro/slider-pro.component";

@Component({
  selector: 'stack-display',
  standalone: true,
  imports: [
    CommonModule,
    SliderProComponent
],
  templateUrl: './stack-display.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackDisplayComponent {
  rutaclientes: string = 'assets/img/socios/stack';
  clientes: string[] = [];
  renderStamp = Date.now()

  // constructor() {
  //   this.mostrarimg();
  // }

  // mostrarimg() {
  //   for (let i = 1; i <= 3; i++) {
  //     this.clientes.push(this.rutaclientes + '/' + i + '.png');
  //   }
  // }
}
