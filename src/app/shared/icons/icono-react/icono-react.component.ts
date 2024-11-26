import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icono-react',
  templateUrl: './icono-react.component.html',
})
export class IconoReactComponent {
  @Input() class = '';
}
