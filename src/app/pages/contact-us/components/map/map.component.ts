import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-map',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './map.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent { }
