import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import { Contact } from 'src/app/shared/contact.model';

import { Contact } from './contact.model'

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  contacts: Contact;
  url = "http://localhost:3000/contacts/";
  constructor(private _http: HttpClient) { }

  postContact(requestbody) {
    //  const test = {
    //   id: 123,
    //   name: "raj",
    //   surname: "kalidas",
    //   number: 7276347963,
    //   birthday:"10.07.1985",
    //   address: "Frankfurt"
    //  }
    return this._http.post(this.url, requestbody)
  }
}
