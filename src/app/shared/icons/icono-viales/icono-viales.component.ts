import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-icono-viales',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './icono-viales.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconoVialesComponent { }
