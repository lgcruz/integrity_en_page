import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-git',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './git.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitComponent {
  @Input() class = "";
}
