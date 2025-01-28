import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-docker',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './docker.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DockerComponent {
  @Input() class = "";
}
