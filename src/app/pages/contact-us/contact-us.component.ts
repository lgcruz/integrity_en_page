import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  Modal,
  Ripple,
  Input,
  initTWE,
} from "tw-elements";
import { MapComponent } from './components/map/map.component';
import { UserComponent } from "../../shared/icons/user/user.component";
import { MailComponent } from "../../shared/icons/mail/mail.component";
import { PhoneComponent } from "../../shared/icons/phone/phone.component";

@Component({
    selector: 'app-contact-us',
    standalone: true,
    imports: [
    CommonModule, MapComponent,
    UserComponent,
    MailComponent,
    PhoneComponent
],
    templateUrl: './contact-us.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactUsComponent implements OnInit {
  ngOnInit(): void {
    initTWE({ Modal, Ripple, Input });
  }
}
