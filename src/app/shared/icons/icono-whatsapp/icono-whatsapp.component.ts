import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-whatsapp',
  templateUrl: './icono-whatsapp.component.html',
})
export class IconoWhatsappComponent {
  @Input() class = '';
}
