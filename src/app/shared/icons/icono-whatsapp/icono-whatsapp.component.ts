import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icono-whatsapp',
  templateUrl: './icono-whatsapp.component.html',
})
export class IconoWhatsappComponent {
  @Input() class = '';
}
