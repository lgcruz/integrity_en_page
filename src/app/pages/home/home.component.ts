import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  Carousel,
  initTWE,
} from "tw-elements";
import { NgOptimizedImage } from '@angular/common';
import { LoadingOfficeComponent } from '@shared/animations/loading-office/loading-office.component';


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        NgOptimizedImage,
        RouterModule,
        LoadingOfficeComponent
    ],
    templateUrl: './home.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {

  rutaclientes: string = 'assets/img/socios/clientes';
  rutaalianzas: string = 'assets/img/socios/alianzas';
  clientes: string[] = [];
  alianzas: string[] = [];

  constructor(){
    this.mostrarimg();
  }
  ngOnInit(): void {
    initTWE({ Carousel });
  }

  mostrarimg(){
    for(let i = 1; i <= 29; i++){
      this.clientes.push(this.rutaclientes + '/' + i + '.png');
      if (i <=10) this.alianzas.push(this.rutaalianzas + '/' + i + '.png');
    }
  }
}
