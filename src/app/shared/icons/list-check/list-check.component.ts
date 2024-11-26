import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'icon-list-check',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './list-check.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCheckComponent { }
