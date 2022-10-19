import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  currentActive = "home";
  shouldShowMobileMenu = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  scrollToSection(section: string) {
    //scroll to section
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
    this.currentActive = section;
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.currentActive = "home";
  }
  toggleMobileMenu() {
    this.shouldShowMobileMenu = !this.shouldShowMobileMenu;
  }
}
