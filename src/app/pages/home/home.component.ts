import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CircuitComponent } from '@shared/icons/circuirt/circuit.component';
import { ClientsAlliancesComponent } from '../../shared/clients-display/clients-display.component';
import { HeroComponent } from "./components/hero/hero.component";
import { AlliancesComponent } from "../../shared/alliances-display/alliances-display.component";
import { StackDisplayComponent } from "../../shared/stack-display/stack-display.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    // CarouselComponent,
    CircuitComponent,
    ClientsAlliancesComponent,
    HeroComponent,
    AlliancesComponent,
    StackDisplayComponent
],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
