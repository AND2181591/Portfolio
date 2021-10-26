import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

import { Contact } from 'src/app/shared/models/Contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = {} as Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    AOS.init();
    this.contact = this.contactService.getContactInfo();
  }

}
