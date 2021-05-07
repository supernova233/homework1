import { Component, OnInit } from '@angular/core';
import {MyProfessionalSkill} from '../my-professional-skill';
import {BackEndService} from '../back-end.service';
import {slideInLeft} from '../animation';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [slideInLeft]
})
export class SkillComponent implements OnInit {
  


  mySkills:MyProfessionalSkill[];



  constructor( private bns:BackEndService ) { }

  ngOnInit(): void {

    this.mySkills = this.bns.getProfessionalSkill()

  }

  

}
