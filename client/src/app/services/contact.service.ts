import { Injectable } from "@angular/core";
import { Contact } from "../models/contacts.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ContactService {
    constructor(private http: HttpClient){

    }

    getContacts(): Observable<Contact[]>{
        return this.http.get<Contact[]>('http://localhost:3000/api/contacts');
    }

    addContact(newContact: Contact){
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        event?.preventDefault();
        return this.http.post<Contact>('http://localhost:3000/api/contact', newContact, {headers: headers});
    }

    deleteContact(id: string){
        return this.http.delete<Contact>('http://localhost:3000/api/contact/'+id);
    }
    searchContact(name: string){
        return this.http.get<Contact[]>('http://localhost:3000/api/contact/'+name);
    }
     
};