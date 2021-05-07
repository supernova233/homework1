import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import {slideInTop} from '../animation';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  animations: [slideInTop]
})
export class ContactMeComponent implements OnInit {

  myContacts;
  constructor(private backN:BackEndService) { }

  ngOnInit(): void {
    this.myContacts = this.backN.getContact();
  }

}
