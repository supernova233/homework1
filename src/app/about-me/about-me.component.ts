import { Component, OnInit } from '@angular/core';
import { slideInBottom } from '../animation';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations:[slideInBottom]
})
export class AboutMeComponent implements OnInit {

  myInfos = [];

  constructor(private bns:BackEndService) { }

  ngOnInit(): void {
    this.myInfos = this.bns.getmyInfo();
  }

}
