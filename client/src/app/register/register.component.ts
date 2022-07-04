import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/contacts.models';
import { ContactService } from '../services/contact.service';
import * as $ from 'jquery';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ContactService]
})
export class RegisterComponent implements OnInit {

  contacts!: Contact[];
  contact!: Contact;
  first_name!: string;
  last_name!: string;
  phone_number!: string;
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    $("#contactAdded").hide();
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  deleteContact(contactId: string | undefined): void {
    console.log(contactId);
    if (contactId !== undefined) {
      this.contactService.deleteContact(contactId).subscribe(data => {
        console.log('hey hey')
        if (data){
          console.log('hi bro')
          for( var i = 0; i < this.contacts.length; i++){
            if (this.contacts[i]._id === contactId){
              this.contacts.slice(i, 1);
            }
          }
        }
      });
    }
  }
  addContact(){
    $("#contactAdded").hide();
    if (!this.checkFieldAreFilled())
      return;
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone_number: this.phone_number
    };
    this.contactService.addContact(newContact).subscribe(contact => {
      this.contacts.push(contact);
    });
    let contactAdded = document.getElementById('contactAdded');
    if (contactAdded !== null)
      contactAdded.innerHTML = 'Le contact a bien été ajouté';
      let sucessAlert = document.getElementById('success-alert');
      $("#contactAdded").fadeTo(2000, 500).slideUp(500, function(){
        $("#contactAdded").slideUp(500);
    });

  }

  checkFieldAreFilled(): boolean{
    let filled = true;
    let firstNameId = <HTMLInputElement>document.getElementById("firstNameError");
    let lastNameId = <HTMLInputElement>document.getElementById("lastNameError");
    let phoneNumberId = <HTMLInputElement>document.getElementById("phoneNumberError");
    this.checkStringIsFilled(this.first_name, firstNameId) ? filled = filled : filled = false;
    this.checkStringIsFilled(this.last_name, lastNameId) ? filled = filled : filled = false;
    this.checkNumberIsFilled(this.phone_number, phoneNumberId) ? filled = filled : filled = false;
    return filled;
  }
  checkStringIsFilled(field: string, id: HTMLInputElement): boolean {
    if (!this.checkFieldIsNotEmpty(field, id)) 
      return false;
    if (!this.checkFieldIsLetters(field, id))
      return false;
      id.innerHTML = "";
      return true;
  }
  checkNumberIsFilled(field: string, id: HTMLInputElement): boolean {
    if (!this.checkFieldIsNotEmpty(field, id)) 
      return false;
    if (!this.checkFieldIsPhoneNumber(field, id))
      return false;
    id.innerHTML = "";
    return true;
  }
  checkFieldIsNotEmpty(field: string, id: HTMLInputElement): boolean {
    if (id === null) return false;
    if (field === undefined || field === ""){
      id.innerHTML = "Ce champ doit être renseigné"
      return false;
    }
    return true;
  }
  checkFieldIsLetters(field: string, id: HTMLInputElement): boolean {

    if (!(/^[a-zA-Z\u00C0-\u017F]+$/.test(field))) {
      id.innerHTML = "Ce champ doit contenir uniquement des lettres";
      return false;
    }
    return true;
  }
  checkFieldIsPhoneNumber(field: string, id: HTMLInputElement): boolean {
    if (!(/1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/).test(field)) {
      id.innerHTML = "Ce champ n'est pas un numéro de téléphone valide";
      return false;
    }
    return true;
  }
    checkFieldIsEmail(field: string, id: HTMLInputElement): boolean {
      if (!(/^([\w\.]*)/).test(field)) {
        id.innerHTML = "Ce champ n'est pas un numéro de téléphone valide";
        return false;
      }
      return true;
    }

  }
