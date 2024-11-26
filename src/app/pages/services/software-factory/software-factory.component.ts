import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { WrenchComponent } from '../../../shared/icons/wrench/wrench.component';
import { JigsawComponent } from '@shared/icons/jigsaw/jigsaw.component';
import { StepsComponent } from '@shared/icons/steps/steps.component';
import { TrendUpComponent } from '../../../shared/icons/trend-up/trend-up.component';
import { GearsComponent } from '@shared/icons/gears/gears.component';
import { DisplaySlideComponent } from '../../../shared/display-slide/display-slide.component';
import { ClockComponent } from '../../../shared/icons/clock/clock.component';
import { AddUserComponent } from '@shared/icons/add-user/add-user.component';

@Component({
  selector: 'app-software-factory',
  standalone: true,
  imports: [
    CommonModule,
    WrenchComponent,
    JigsawComponent,
    StepsComponent,
    TrendUpComponent,
    GearsComponent,
    DisplaySlideComponent,
    AddUserComponent,
  ],
  templateUrl: './software-factory.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SoftwareFactoryComponent {
  public steps = signal<0 | 1 | 2 | 3 | 4 | 5>(0);
  public serviceTypes = [
    {
      title: 'New Developments',
      icon: 'steps',
      detail:
        'Creating new features or solutions to meet evolving business needs not supported by current systems. ',
    },
    {
      title: 'Application Innovation & Enhancement',
      icon: 'gears',
      detail:
        'Enhancing existing solutions and optimizing performance. Adapting to changes in the platform or operating environment.',
    },
    {
      title: 'Solution Optimization',
      icon: 'improve',
      detail:
        'Continuous improvement of existing applications and solutions to meet evolving business needs.',
    },
    {
      title: 'Staff Augmentation',
      icon: 'add-user',
      detail:
        'Providing skilled professionals to temporarily extend your team, filling gaps and supporting project delivery with the right expertise.',
    },
    {
      title: 'Maintenance',
      icon: 'wrench',
      detail:
        'Fixing errors and defects in production solutions to ensure business functionality and availability.',
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
