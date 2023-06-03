import { Component } from "@angular/core";
import { skills } from "./skills";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
  skills = skills;
  constructor() {}
  ngOnInit(): void {}
}
