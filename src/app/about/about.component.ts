import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  numberOfApps = 50;
  numberOfAppUsers = 300;
  numberOfCountries = 10;
  currentActive = "home";
  constructor() {}

  ngOnInit(): void {
    this.countUp(0, this.numberOfApps, 50).subscribe((count) => {
      this.numberOfApps = count;
    });

    this.countUp(0, this.numberOfAppUsers, 5).subscribe((count) => {
      this.numberOfAppUsers = count;
    });

    this.countUp(0, this.numberOfCountries, 100).subscribe((count) => {
      this.numberOfCountries = count;
    });
  }

  countUp(
    startCount: number,
    endCount: number,
    interval: number
  ): Observable<number> {
    return new Observable<number>((observer) => {
      let count = startCount;
      const timer = setInterval(() => {
        count++;
        observer.next(count);
        if (count === endCount) {
          observer.complete();
          clearInterval(timer);
        }
      }, interval);
    });
  }
  scrollToSection(section: string) {
    //scroll to section
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
    this.currentActive = section;
  }
}
