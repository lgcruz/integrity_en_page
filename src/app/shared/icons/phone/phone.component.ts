import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'icon-phone',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './phone.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneComponent { }
