import { Component, Input } from '@angular/core';
import { Contact } from '../../model/contact';
import { ContactService } from '../../services/contact.service';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

@Component({
  selector: 'app-contact',
  imports: [FormatDatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() contact?: Contact;

  constructor(private contactService: ContactService){}

  deleteContact(id: number) {
    if(id > -1){
      this.contactService.deleteContact(id);
    }
  }
}
