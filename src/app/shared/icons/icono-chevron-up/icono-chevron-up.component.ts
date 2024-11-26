import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './icono-chevron-up.component.svg',
  selector: 'app-icono-chevron-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconoChevronUpComponent {
  @Input() class = '';
  @Input() height = '';
  @Input() width = '';
}
