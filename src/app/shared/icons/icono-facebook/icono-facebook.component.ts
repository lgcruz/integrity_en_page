import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icono-facebook',
  templateUrl: './icono-facebook.component.html',
})
export class IconoFacebookComponent {
  @Input() class = '';
}
