import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-jigsaw',
  standalone: true,
  imports: [],
  templateUrl: './jigsaw.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JigsawComponent {}
