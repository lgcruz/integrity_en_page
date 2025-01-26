import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
import { ClientsAlliancesComponent } from "../../shared/clients-alliances/clients-alliances.component";

@Component({
    selector: 'app-contact-us',
    standalone: true,
    imports: [
    CommonModule, MapComponent, ReactiveFormsModule,
    UserComponent, JsonPipe,
    MailComponent,
    PhoneComponent,
    ClientsAlliancesComponent
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

  form = signal<FormGroup>(
    new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      message: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  );
  ngOnInit(): void {
    initTWE({ Modal, Ripple, Input });
  }
}
