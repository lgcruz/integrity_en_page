import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'icon-mail',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './mail.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailComponent { }
