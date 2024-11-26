import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-project-diagram',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './project-diagram.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDiagramComponent { }
