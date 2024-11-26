import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icono-angular',
  templateUrl: './icono-angular.component.html',
})
export class IconoAngularComponent {
  @Input() class = "";
}
