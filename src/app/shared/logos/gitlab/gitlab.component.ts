import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-gitlab',
  standalone: true,
  imports: [],
  templateUrl: './gitlab.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitlabComponent {
  @Input() class = '';
}
