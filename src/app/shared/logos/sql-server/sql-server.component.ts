import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-sql-server',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './sql-server.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SqlServerComponent {
  @Input() class = "";
 }
