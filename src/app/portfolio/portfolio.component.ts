import { Component, OnInit } from '@angular/core';
import { slideInLeft } from '../animation';
import { BackEndService } from '../back-end.service';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations:[slideInLeft]
})
export class PortfolioComponent implements OnInit {

  myPortfolios:Portfolio[];

  constructor(private bns:BackEndService) { }

  ngOnInit(): void {
    this.myPortfolios = this.bns.getPortfolio();
  }

}
