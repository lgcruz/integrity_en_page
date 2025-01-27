import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WrenchComponent } from '../../../shared/icons/wrench/wrench.component';
import { JigsawComponent } from '@shared/icons/jigsaw/jigsaw.component';
import { StepsComponent } from '@shared/icons/steps/steps.component';
import { TrendUpComponent } from '../../../shared/icons/trend-up/trend-up.component';
import { GearsComponent } from '@shared/icons/gears/gears.component';
import { DisplaySlideComponent } from '../../../shared/display-slide/display-slide.component';
import { AddUserComponent } from '@shared/icons/add-user/add-user.component';
import { ProjectPhasesComponent } from './components/project-phases/project-phases.component';
import { TestModuleComponent } from "./components/test-module/test-module.component";
import { IconoVialesComponent } from "../../../shared/icons/icono-viales/icono-viales.component";

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
    ProjectPhasesComponent,
    // TestModuleComponent,
    IconoVialesComponent
],
  templateUrl: './software-factory.component.html',
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SoftwareFactoryComponent {
  public serviceTypes = [
    {
      title: 'Custom Software Development',
      icon: 'steps',
      detail:
        'Creating custom software to meet evolving business needs not supported by current systems. ',
    },
    {
      title: 'QA and Testing',
      icon: 'test',
      detail:
        'Make your technology bulletproof, with manual and automated testing.',
    },
    // {
    //   title: 'Application Innovation & Enhancement',
    //   icon: 'gears',
    //   detail:
    //     'Enhancing existing solutions and optimizing performance. Adapting to changes in the platform or operating environment.',
    // },
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
}
