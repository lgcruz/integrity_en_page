import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
    selector: 'app-software-factory',
    standalone: true,
    imports: [
        CommonModule,
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
  public steps = signal<0|1|2|3|4|5>(0);
  public selectStep(number: 1|2|3|4|5): void {
    if (this.steps() === number) {
      this.steps.set(0);
    } else {
      this.steps.set(number);

    }
  }
 }
