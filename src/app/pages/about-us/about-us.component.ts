import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  Ripple,
  initTWE,
} from "tw-elements";
import { ListCheckComponent } from "../../shared/icons/list-check/list-check.component";
import { IconoLaptopComponent } from "../../shared/icons/laptop/icono-laptop.component";
import { ClockComponent } from "../../shared/icons/clock/clock.component";

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [
    CommonModule, RouterModule,
    ListCheckComponent,
    IconoLaptopComponent,
    ClockComponent
],
    templateUrl: './about-us.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutUsComponent implements OnInit {
  ngOnInit(): void {
    initTWE({ Ripple });
  }
 }
