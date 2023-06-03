import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { StackoverflowComponent } from "./stackoverflow/stackoverflow.component";
import { ServicesComponent } from "./services/services.component";
import { AppsComponent } from "./apps/apps.component";
import { SwiperModule } from "swiper/angular";
import { FooterComponent } from "./footer/footer.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { ShowcaseComponent } from './showcase/showcase.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SkillsComponent,
    HeaderComponent,
    AboutComponent,
    StackoverflowComponent,
    ServicesComponent,
    AppsComponent,
    FooterComponent,
    WhyMeComponent,
    ShowcaseComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
