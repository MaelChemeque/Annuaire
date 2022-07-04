import { Injectable } from "@angular/core";
import { Contact } from "../models/contacts.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ContactService {
    urlAPI!: string;
    constructor(private http: HttpClient){
        this.urlAPI = "http://localhost:3000/api";
    }

    getContacts(): Observable<Contact[]>{
        return this.http.get<Contact[]>(this.urlAPI+'/contacts');
    }

    addContact(newContact: Contact){
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        event?.preventDefault();
        return this.http.post<Contact>(this.urlAPI+'/contact', newContact, {headers: headers});
    }

    deleteContact(id: string){
        return this.http.delete<Contact>(this.urlAPI+'/contact/'+id);
    }
    // We are not using this function
    searchContact(name: string){
        return this.http.get<Contact[]>(this.urlAPI+'/contact/'+name);
    }
     
};