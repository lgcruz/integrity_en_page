import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-tools-animation',
  standalone: true,
  imports: [],
  templateUrl: './tools.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolsComponent {}
