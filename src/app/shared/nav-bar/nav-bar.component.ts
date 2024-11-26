import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { RouteInfo } from '@interfaces/general.interface';
import { DOCUMENT } from '@angular/common';
import { OutSideClickDirective } from '../../directives/outside-click.directive';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [
        CommonModule, RouterModule, OutSideClickDirective
    ],
    templateUrl: './nav-bar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  public routes = routes.map((route) => route ?? []).flat().filter((route) => route && route.path && route.title);
  public activeMenu = false;
  public mobileMenu = signal(false);
  public locationMenu = signal(false);
  public servicesMenu = signal(false);
  document: Document = inject(DOCUMENT)

  constructor() {
    console.log(routes.map((route) => route ?? []).flat().filter((route) => route && route.path && route.title));
  }
  toogleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  toogleMobileMenu() {
    this.mobileMenu.update(value => !value);
  }

  toogleLocationMenu() {
    this.locationMenu.update(value => !value);
  }

  toogleServicesMenu() {
    this.servicesMenu.update(value => !value);
    console.log('check');

  }

  goToUrl(): void {
    this.document.location.href = 'https://www.integritysolutions.com.ec/home';
  }


 }
