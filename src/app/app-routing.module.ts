import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { EducationTabComponent } from './education-tab/education-tab.component';
import { ExperiencesTabComponent } from './experiences-tab/experiences-tab.component';
import { ProjectsTabComponent } from './projects-tab/projects-tab.component';
import { HobbiesTabComponent } from './hobbies-tab/hobbies-tab.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeTabComponent
  },
  {
    path: "education",
    component: EducationTabComponent
  },
  {
    path: "experiences",
    component: ExperiencesTabComponent
  },
  {
    path: "projects",
    component: ProjectsTabComponent
  },
  {
    path: "hobbies",
    component: HobbiesTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
