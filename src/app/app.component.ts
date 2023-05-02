import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import * as Aos from "aos";
import { StackoverflowComponent } from "./stackoverflow/stackoverflow.component";
import { SkillsComponent } from "./skills/skills.component";
import { ServicesComponent } from "./services/services.component";
import { AppsComponent } from "./apps/apps.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { ShowcaseComponent } from "./showcase/showcase.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit{
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(private ngZone: NgZone,private viewContainerRef: ViewContainerRef) {
    Aos.init();
  }
  ngAfterViewInit(): void {
    document.addEventListener("scrollend", (event) => {
      this.viewContainerRef.createComponent(StackoverflowComponent);
      this.viewContainerRef.createComponent(SkillsComponent);
      this.viewContainerRef.createComponent(ServicesComponent);
      this.viewContainerRef.createComponent(AppsComponent);
      this.viewContainerRef.createComponent(WhyMeComponent);
      this.viewContainerRef.createComponent(ShowcaseComponent);
      this.viewContainerRef.createComponent(ContactComponent);
      this.viewContainerRef.createComponent(FooterComponent);
    });

  }
}
