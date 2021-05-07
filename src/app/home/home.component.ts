import { Component, OnInit } from '@angular/core';
import {fadeIn,slideDown} from './fade-in';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeIn,slideDown]
})
export class HomeComponent implements OnInit {
  isEnter:boolean = false;
  constructor() { 

   }
  ngOnInit(): void {
    this.isEnter = true;

  }

}
