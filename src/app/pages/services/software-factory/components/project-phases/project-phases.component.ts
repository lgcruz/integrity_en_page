import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BoardAnimationComponent } from '@shared/icons/board-animation/board-animation.component';
import { BoxAnimationComponent } from '@shared/icons/box-animation/box-animation.component';
import { CircuitComponent } from '@shared/icons/circuirt/circuit.component';
import { GearsAnimationComponent } from '@shared/icons/gears-animation/gears-animation.component';
import { ToolsComponent } from '@shared/icons/tools/tools.component';
import { UserGroupAnimationComponent } from '@shared/icons/user-group-animation/user-group-animation.component';

@Component({
  selector: 'app-project-phases',
  standalone: true,
  imports: [
    CommonModule,
    GearsAnimationComponent,
    UserGroupAnimationComponent,
    BoxAnimationComponent,
    ToolsComponent,
    BoardAnimationComponent,
    CircuitComponent,
  ],
  templateUrl: './project-phases.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPhasesComponent {
  public steps = signal<0 | 1 | 2 | 3 | 4 | 5>(0);
  public phases = [
    {
      id: 0,
      title: '',
      keyPoints: [''],
    },
    {
      id: 1,
      title: 'Start tasks',
      keyPoints: [
        'Project Definition',
        'Stakeholders',
        'Project Constitution',
        'Team Selection',
      ],
    },
    {
      id: 2,
      title: 'Planning tasks',
      keyPoints: [
        'Project Management Plan',
        'Product Backlog',
        'Sprint Planning',
        'Risk Management',
      ],
    },
    {
      id: 3,
      title: 'Execution tasks',
      keyPoints: [
        'Product Development',
        'Team Management',
        'Communication Management',
      ],
    },
    {
      id: 4,
      title: 'Control tasks',
      keyPoints: [
        'Scope and schedule control',
        'Change Management',
        'Software Quality Control',
      ],
    },
    {
      id: 5,
      title: 'Close up tasks',
      keyPoints: [
        'Closing of the Phase',
        'Phase Retrospective',
        'Product Delivery',
      ],
    },
  ];

  public selectStep(number: 1 | 2 | 3 | 4 | 5): void {
    if (this.steps() === number) {
      this.steps.set(0);
    } else {
      this.steps.set(number);
    }
  }
}
