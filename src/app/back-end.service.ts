import { Injectable } from '@angular/core';
import { MyProfessionalSkill } from './my-professional-skill';


@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor() { }

  getProfessionalSkill():MyProfessionalSkill[]{
    return [
      {groupName:'Graphic & Design',skills:['Photoshop','Substance painter','Substance Designer','3ds Max']},
      {groupName:'Coding Languages',skills:['C++','PHP','JavaScript','HTML/CSS','Python']},
      {groupName:'Frameworks/Systems',skills:['Angular','MVC','Visual Studio','Bootstrap']},
    ]
  }

  getInfo(){
    return " my name is KS"
  }
}
