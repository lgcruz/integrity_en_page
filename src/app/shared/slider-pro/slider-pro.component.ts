import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
export class SliderProComponent implements OnInit {
  @Input() rutaclientes: string = '';
  @Input() quantity: number = 0;
  @Input() translate: string = '';
  @Input() format: string = 'svg';
  @Input() timer: number = 0;
  listado: string[] = [];
  renderStamp = Date.now()

  constructor() {

  }
  ngOnInit(): void {
    this.mostrarimg();

  }

  mostrarimg() {
    for (let i = 1; i <= this.quantity; i++) {
      this.listado.push(this.rutaclientes + '/' + i + '.'+this.format);
    }

  }

  errorImgLoad(e: any) {
    console.log(e);

  }
}
