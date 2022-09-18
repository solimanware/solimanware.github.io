import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFullpageModule } from "@fullpage/angular-fullpage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { StackoverflowComponent } from "./stackoverflow/stackoverflow.component";
import { ServicesComponent } from "./services/services.component";
import { AppsComponent } from "./apps/apps.component";
import { SwiperModule } from "swiper/angular";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
