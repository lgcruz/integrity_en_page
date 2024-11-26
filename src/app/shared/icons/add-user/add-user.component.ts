import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {}
