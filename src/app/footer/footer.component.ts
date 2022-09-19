import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  currentActive = "home";
  constructor() {}

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
}
