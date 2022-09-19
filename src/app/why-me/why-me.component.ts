import { Component, OnInit } from "@angular/core";
import * as lotti from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
@Component({
  selector: "app-why-me",
  templateUrl: "./why-me.component.html",
  styleUrls: ["./why-me.component.scss"],
})
export class WhyMeComponent implements OnInit {
  constructor() {
    // register lottie and define custom element
    defineLordIconElement(lotti.default.loadAnimation);
  }

  ngOnInit(): void {}
}
