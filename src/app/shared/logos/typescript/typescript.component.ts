import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-typescript',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './typescript.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypescriptComponent {
  @Input() class = "";
 }
