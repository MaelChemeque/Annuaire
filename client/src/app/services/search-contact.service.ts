import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchContactService {
  public name: Subject<string> = new BehaviorSubject<string>("");

  
  constructor() { }
}
