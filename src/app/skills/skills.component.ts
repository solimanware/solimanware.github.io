import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";

declare const TagCloud: any;
@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  //create html element
  @ViewChild("content") content: any;
  constructor() {}

  ngAfterViewInit() {
    console.log("Values on ngAfterViewInit():");
    const myTags = [
      "JavaScript",
      "CSS",
      "HTML",
      "C#",
      "TypeScript",
      "Angular",
      "Git",
      "GitHub",
      "Node.js",
      "Express.js",
      "Firebase",
      "MongoDB",
      "jQuery",
      "Material-UI",
      "Bootstrap",
      "SASS",
      "Sketch",
      "Adobe Photoshop",
      "Premiere Pro",
      "Ionic",
      "Capacitor",
      "Cordova",
      "PhoneGap",
      "XCode",
      "Visual Studio Code",
      "Swift",
      "SwiftUI",
      "Lodash",
      "Moment",
      "Chart.js",
      "Fullpage.js"
    ];
    var tagCloud = TagCloud(this.content.nativeElement, myTags, {
      // radius in px
      radius: 400,

      // animation speed
      // slow, normal, fast
      maxSpeed: "fast",
      initSpeed: "fast",

      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,

      // interact with cursor move on mouse out
      keep: true,
    });
  }

  ngOnInit(): void {}
}
