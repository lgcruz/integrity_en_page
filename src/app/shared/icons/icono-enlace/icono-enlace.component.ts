import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icono-enlace',
  templateUrl: './icono-enlace.component.svg'
})
export class IconoEnlaceComponent {
  @Input() class = '';
  @Input() height = '';
  @Input() width = '';
}
