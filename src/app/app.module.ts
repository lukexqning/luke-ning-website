import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { EducationTabComponent } from './education-tab/education-tab.component';
import { ExperiencesTabComponent } from './experiences-tab/experiences-tab.component';
import { ProjectsTabComponent } from './projects-tab/projects-tab.component';
import { HobbiesTabComponent } from './hobbies-tab/hobbies-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeTabComponent,
    EducationTabComponent,
    ExperiencesTabComponent,
    ProjectsTabComponent,
    HobbiesTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
