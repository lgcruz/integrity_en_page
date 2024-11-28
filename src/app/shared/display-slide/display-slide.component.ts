import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularComponent } from '../logos/angular/angular.component';
import { ReactComponent } from '../logos/react/react.component';
import { VueComponent } from '../logos/vue/vue.component';
import { AspnetComponent } from '../logos/aspnet/aspnet.component';
import { JqueryComponent } from '../logos/jquery/jquery.component';
import { BlazorComponent } from '../logos/blazor/blazor.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-slide',
  standalone: true,
  imports: [
    CommonModule,
    AngularComponent,
    ReactComponent,
    VueComponent,
    AspnetComponent,
    JqueryComponent,
    BlazorComponent,
  ],
  templateUrl: './display-slide.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplaySlideComponent {
  public stackList = [
    {
      title: 'Frontend',
      stack: 'front',
      subsection: ['Web', 'Mobile', 'Desktop'],
    },
    {
      title: 'Backend ',
      stack: 'back',
      subsection: ['Languages', 'Databases'],
    },
    {
      title: 'Business Intelligence',
      stack: 'bi',
    },
    {
      title: 'DevOps',
      stack: 'devops ',
      subsection: ['Testing', 'Static Analisis', 'Deployment', 'Versioning', 'CI/CD', 'Cloud'],
    },
  ];
}
