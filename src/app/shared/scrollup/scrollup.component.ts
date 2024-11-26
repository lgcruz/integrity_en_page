import { Component, HostListener, signal } from '@angular/core';
import { IconoChevronUpComponent } from '@shared/icons/icono-chevron-up/icono-chevron-up.component';

@Component({
  standalone: true,
  selector: 'app-scrollup',
  templateUrl: './scrollup.component.html',
  styleUrls: ['./scrollup.component.css'],
  imports: [IconoChevronUpComponent]
})
export class ScrollupComponent {

  showBtn = signal(false);

  constructor() {

  }
  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showBtn.update((value) => window.scrollY > 350);
  }
}
