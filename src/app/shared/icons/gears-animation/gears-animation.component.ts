import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'icon-gears-animation',
  standalone: true,
  imports: [],
  templateUrl: './gears-animation.component.html',
  styleUrl: './gears-animation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GearsAnimationComponent {
  @Input() class = '';
}
