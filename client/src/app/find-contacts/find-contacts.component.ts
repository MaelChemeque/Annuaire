import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contact } from '../models/contacts.models';
import { ContactService } from '../services/contact.service';
import { SearchContactService } from '../services/search-contact.service';

@Component({
  selector: 'app-find-contacts',
  templateUrl: './find-contacts.component.html',
  styleUrls: ['./find-contacts.component.scss'],
  providers: [ContactService]

})
export class FindContactsComponent implements OnInit {
  contacts!: Contact[];

  constructor(private contactService: ContactService, public searchContactService: SearchContactService , private router: Router) { }

  ngOnInit(): void {
  }

  searchContact(){
    let searchField = <HTMLInputElement>document.getElementById("searchField");
    if (searchField !== null){
      this.searchContactService.name.next(searchField.value);
      this.redirectTo('contacts');
    }
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 } 
}
