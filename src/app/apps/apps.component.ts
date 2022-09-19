import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  Autoplay,
  FreeMode,
  Scrollbar,
} from "swiper";
import { apps } from "./data";

SwiperCore.use([
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  Autoplay,
  FreeMode,
  Scrollbar,
]);

@Component({
  selector: "app-apps",
  templateUrl: "./apps.component.html",
  styleUrls: ["./apps.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppsComponent implements OnInit {
  apps = apps;
  constructor() {}

  ngOnInit() {}
}
