import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-mysql',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './mysql.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MysqlComponent {
  @Input() class = "";
 }
