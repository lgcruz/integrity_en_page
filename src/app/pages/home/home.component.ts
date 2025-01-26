import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CircuitComponent } from '@shared/icons/circuirt/circuit.component';
import { ClientsAlliancesComponent } from '../../shared/clients-alliances/clients-alliances.component';
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    // CarouselComponent,
    CircuitComponent,
    ClientsAlliancesComponent,
    HeroComponent
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
