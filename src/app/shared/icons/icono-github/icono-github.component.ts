import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icono-github',
  templateUrl: './icono-github.component.svg',
})
export class IconoGithubComponent {
  @Input() class = '';
}
