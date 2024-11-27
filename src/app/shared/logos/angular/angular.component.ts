import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-angular',
  standalone: true,
  imports: [],
  templateUrl: './angular.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularComponent {
  @Input() class = '';
}
