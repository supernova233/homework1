import { Injectable } from '@angular/core';
import { MyProfessionalSkill } from './my-professional-skill';
import {Portfolio} from './portfolio';


@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor() { }

  getProfessionalSkill():MyProfessionalSkill[]{
    return [
      {groupName:'Graphic & Design',skills:['Photoshop','Substance painter','Substance Designer','3ds Max']},
      {groupName:'Coding Languages',skills:['C++','PHP','JavaScript','TypeScript','HTML/CSS','Python']},
      {groupName:'Frameworks/Systems',skills:['Angular','MVC','Visual Studio','Bootstrap']},
    ]
  }

  getContact(){
    return [
      {methodName:"FaceBook",
      content:'<i class="fab fa-facebook-square"></i> <a target="_blank" href="https://www.facebook.com/msasp.ks/">Knot KS</a>'
      },
      {methodName:"IG",
      content:'<i class="bi bi-instagram"></i> <a target="_blank" href="https://www.instagram.com/knot.ks">msasp.ks</a>'},
      {methodName:"Email",
      content:'<i class="bi bi-envelope"></i> <a target="_blank" href="mailto:supernova233@gmail.com">supernova233@gmail.com</a>'},
      {methodName:"LineID",
      content:'<i class="fab fa-line"></i> <a target="_blank" href="http://line.me/ti/p/supernova233">supernova233</a>'},
      {methodName:"Phone",
      content:'<i class="fas fa-phone-square-alt"></i> <span class="text-primary">083-213-0213</span>'},

    ]
  }

  getmyInfo(){

    let bornYear = 1995;
    let nowDate = new Date();
    let realAge = nowDate.getFullYear() - bornYear;

    return [
      {header:"Fullname",data:"Korawit Srisawan"},
      {header:"Nickname",data:"Knot"},
      {header:"Age",data:realAge},
      {header:"Date of birth",data:"1995 / september / 11"},
      {header:"Nationality",data:"Thai"},
      
    ]
  }


  getPortfolio():Portfolio[]{
    return [
      {header:"Northern Digital Economy",desc:"ได้มีส่วนร่วมในโครงการพัฒนาศักยภาพผู้ประกอบการ ด้าน Digital Economy ภาคเหนือ โดยได้ร่วมงานกับ ขนมหวานบ้านความรัก(SME) และ Minterax Studio (DSP) ในการพัฒนา Digital Content ขนมไทย Home made เมือปี ค.ศ. 2021"},

    ]
  }
}
