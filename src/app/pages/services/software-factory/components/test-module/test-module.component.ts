import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-test-module',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './test-module.component.html',
    styleUrl: './test-module.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestModuleComponent { }
