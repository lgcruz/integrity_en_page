import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-elastic-search',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './elastic-search.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElasticSearchComponent {
  @Input() class = "";
}
