import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// filter: grayscale(1);

// .slider .item:hover {
//   filter: grayscale(0);
// }

@Component({
  selector: 'slider-pro',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './slider-pro.component.html',
  styles: `
    .slider:hover .item {
      animation-play-state: paused!important;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderProComponent {
  @Input() rutaclientes: string = '';
  @Input() quantity: number = 0;
  @Input() translate: string = '';
  listado: string[] = [];
  renderStamp = Date.now()

  constructor() {
    this.mostrarimg();
  }

  mostrarimg() {
    for (let i = 1; i <= 29; i++) {
      this.listado.push(this.rutaclientes + '/' + i + '.png');
    }
  }

  errorImgLoad(e: any) {
    console.log(e);

  }
}
