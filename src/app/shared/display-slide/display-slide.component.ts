import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-display-slide',
  standalone: true,
  imports: [],
  templateUrl: './display-slide.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplaySlideComponent { }
