import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Contact } from '../shared/contact.model';
declare var M: any;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {

  public contactData = {
    name: '',
    surname: '',
    number: '',
    birthday: '',
    address: ''
  }

  formGroup: FormGroup;
   public contactForm: NgForm;
  constructor(private contactService: ContactService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }


  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }

  onSubmit(formGroup) {
    console.log(formGroup.value);
    alert('dcdjdndl')
   // if (this.contactForm.valid) {

      this.contactService.postContact(formGroup.value).subscribe((res) => {
        M.toast({ html: 'Saved successfully', classes: 'rounded' })
      })
  //  }
  }

}
