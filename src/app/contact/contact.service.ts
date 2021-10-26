import { Injectable } from '@angular/core';

import { Contact } from '../shared/models/Contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contact: Contact = {
    email: 'andrew.camacho11191986@gmail.com', 
    gitHub: 'https://github.com/AND2181591'
  };

  constructor() { }

  getContactInfo(): Contact {
    return this.contact;
  }
}
