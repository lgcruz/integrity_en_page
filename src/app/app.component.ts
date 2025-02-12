import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '@shared/nav-bar/nav-bar.component';
import { ScrollupComponent } from '@shared/scrollup/scrollup.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { InformationComponent } from "./shared/information/information.component";
import { AlliancesComponent } from "./shared/alliances-display/alliances-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ScrollupComponent, FooterComponent, InformationComponent, AlliancesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
