import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../model/contact';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contact-list',
  imports: [ContactComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  contacts: Contact[] | undefined;
  
  constructor(private contactService: ContactService) { }

  ngOnInit(){
    this.contacts = this.contactService.getAllContacts();
  }

}
