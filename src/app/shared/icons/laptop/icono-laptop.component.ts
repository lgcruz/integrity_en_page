import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'icon-laptop',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './laptop.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconoLaptopComponent { }
