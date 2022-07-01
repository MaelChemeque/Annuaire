import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contacts.models';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SearchContactService } from '../services/search-contact.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts!: Contact[];
  contact!: Contact;
  first_name!: string;
  last_name!: string;
  phone_number!: string;
  name!: string;

  constructor(private contactService: ContactService, public searchContactService: SearchContactService, private router: Router, private route: ActivatedRoute) {
    this.searchContactService.name.subscribe((name) => {this.name = name})
  }

  
  ngOnInit(): void {

    if (this.name === undefined || this.name === "" || this.name === null){
      this.contactService.getContacts().subscribe(contacts => {
        this.contacts = contacts;
      });
    } else {
      this.searchContact(this.name);
    }
  }

  deleteContact(contactId: string | undefined): void {
    if (contactId !== undefined) {
      this.contactService.deleteContact(contactId).subscribe(data => {
        if (data){
          for( var i = 0; i < this.contacts.length; i++){
            if (this.contacts[i]._id === contactId){
              this.contacts.slice(i, 1);
            }
          }
        }
      });
    }
    this.redirectTo('contacts');
  }
  addContact(){
    console.log("hello")
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone_number: this.phone_number
    };
    this.contactService.addContact(newContact).subscribe(contact => {
      this.contacts.push(contact);
    });
  }

  searchContact(name: string){
    this.contactService.searchContact(name).subscribe(contacts => {
      this.contacts = contacts;
    });
  }
  redirectTo(uri:string){
    this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 } 
}
