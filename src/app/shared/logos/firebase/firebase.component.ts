import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-firebase',
  standalone: true,
  imports: [],
  templateUrl: './firebase.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirebaseComponent {
  @Input() class = '';
}
