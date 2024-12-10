import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Carousel, initTWE } from 'tw-elements';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './carousel.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {
    initTWE({ Carousel });
  }
}
