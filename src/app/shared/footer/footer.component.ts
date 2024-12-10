import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CircuitComponent } from '@shared/icons/circuirt/circuit.component';
import { IconoFacebookComponent } from '@shared/icons/icono-facebook/icono-facebook.component';
import { IconoInstagramComponent } from '@shared/icons/icono-instagram/icono-instagram.component';
import { IconoLinkedinComponent } from '@shared/icons/icono-linkedin/icono-linkedin.component';
import { IconoTiktokComponent } from '@shared/icons/icono-tiktok/icono-tiktok.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    IconoFacebookComponent,
    IconoInstagramComponent,
    IconoLinkedinComponent,
    IconoTiktokComponent,
    RouterModule,
    CircuitComponent,
  ],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public date = new Date();
}
