import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icono-instagram',
  templateUrl: './icono-instagram.component.html',
})
export class IconoInstagramComponent {
  @Input() class = "";
}
