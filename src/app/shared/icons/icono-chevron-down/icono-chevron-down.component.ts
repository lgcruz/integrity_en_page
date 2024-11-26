import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icono-chevron-down',
  templateUrl: './icono-chevron-down.component.svg',
})
export class IconoChevronDownComponent {
  @Input() class = '';
  @Input() height = '';
  @Input() width = '';
}
