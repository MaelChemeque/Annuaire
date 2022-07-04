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
  name!: string;

  constructor(private contactService: ContactService, public searchContactService: SearchContactService, private router: Router, private route: ActivatedRoute) {
    this.searchContactService.name.subscribe((name) => {this.name = name})
  }

  
  ngOnInit(): void {
      this.contactService.getContacts().subscribe(contacts => {
        this.contacts = contacts.sort((a,b) => a.first_name.localeCompare(b.first_name));
      });
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
  updateContact(contactId: string | undefined): void {
    // TODO
  }
  
  // this method allows to search in the database by a first_name calling a service
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
