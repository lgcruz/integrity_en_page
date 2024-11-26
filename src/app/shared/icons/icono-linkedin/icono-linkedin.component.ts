import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icono-linkedin',
  templateUrl: './icono-linkedin.component.html',
})
export class IconoLinkedinComponent {
  @Input() class = "";
}
