import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-blazor',
  standalone: true,
  imports: [],
  templateUrl: './blazor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlazorComponent {
  @Input() class = '';
}
