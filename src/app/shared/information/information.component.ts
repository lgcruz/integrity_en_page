import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconoWhatsappComponent } from "../icons/icono-whatsapp/icono-whatsapp.component";
import { MailComponent } from "../icons/mail/mail.component";

@Component({
    selector: 'app-information',
    standalone: true,
    imports: [
    CommonModule,
    IconoWhatsappComponent,
    MailComponent
],
    templateUrl: './information.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent { }
