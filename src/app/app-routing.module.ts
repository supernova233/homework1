import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutMeComponent},
  {path:'skills',component:SkillComponent},
  {path:'contact',component:ContactMeComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'**',redirectTo:"/404",pathMatch:"full"},
  {path:'404',component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
