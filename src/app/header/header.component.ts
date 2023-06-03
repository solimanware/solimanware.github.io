import { Component, OnInit } from "@angular/core";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  currentActive = "home";
  shouldShowMobileMenu = false;
  faBars = faBars;
  faClose = faWindowClose
  constructor() {}

  ngOnInit(): void {}
  scrollToSection(section: string) {
    //scroll to section
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
    this.currentActive = section;
    this.shouldShowMobileMenu = false;
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.currentActive = "home";
    this.shouldShowMobileMenu = false;
  }
  toggleMobileMenu() {
    this.shouldShowMobileMenu = !this.shouldShowMobileMenu;
  }

  comingSoon(){
    alert("Coming Soon");
  }
}
