import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icono-tiktok',
  templateUrl: './icono-tiktok.component.html',
})
export class IconoTiktokComponent {
  @Input() class = '';
}
