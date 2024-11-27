import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularComponent } from '../logos/angular/angular.component';
import { ReactComponent } from '../logos/react/react.component';
import { VueComponent } from '../logos/vue/vue.component';
import { AspnetComponent } from '../logos/aspnet/aspnet.component';
import { JqueryComponent } from '../logos/jquery/jquery.component';
import { BlazorComponent } from '../logos/blazor/blazor.component';

@Component({
  selector: 'app-display-slide',
  standalone: true,
  imports: [
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
      title: 'Frontend Languages & Frameworks',
      stack: 'front',
    },
    {
      title: 'Backend ',
      stack: 'front',
    },
    {
      title: 'Frontend Languages & Frameworks',
      stack: 'front',
    },
  ];
}
