import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from "@angular/core";
import * as Aos from "aos";
declare const Sketch: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  title = "solimanware";
  config: any;
  fullpage_api: any;
  @ViewChild("sketch") sketch: any;
  @ViewChild("typewriter") typewriter: any;
  constructor(private ngZone: NgZone) {
    Aos.init();
    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: "YOUR LICENSE KEY HERE",
      anchors: [
        "firstPage",
        "secondPage",
        "thirdPage",
        "fourthPage",
        "lastPage",
      ],
      menu: "#menu",

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin: any, destination: any, direction: any) => {
        console.log(origin.index);
      },
    };
  }

  ngAfterViewInit() {
    this.startSketch();
    this.startTyping();
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  startSketch() {
    //electric sketch by https://codepen.io/natewiley/
    const s = Sketch.create({
      autoclear: false,
      fullScreen: false,
      autoPause: false,
      container: this.sketch.nativeElement,
    });
    const max = 80;
    const dots: any[] = [];
    const clearColor = "rgba(0,0,0,.1)";
    let hue = 0;
    const connectDistance = s.width / 10;
    const center = {
      x: s.width / 2,
      y: s.height / 2,
    };

    const getDistance = function (
      x1: number,
      x2: number,
      y1: number,
      y2: number
    ) {
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    };

    function D() {}
    const random = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    D.prototype = {
      init: function () {
        this.x = random(0, s.width);
        this.y = random(0, s.height);
        this.vx = random(-3, 3);
        this.vy = random(-3, 3);
      },

      draw: function () {
        s.strokeStyle = "hsla(" + hue + ", 100%, 50%, .05)";
        s.beginPath();
        s.moveTo(this.x, this.y);
        s.lineTo(center.x || s.width / 2, center.y || s.height / 2);
        s.closePath();
        s.stroke();
        for (const i in dots) {
          let d = dots[i];
          const dist = getDistance(this.x, d.x, this.y, d.y);
          if (dist < connectDistance) {
            s.globalCompositeOperation = "lighter";
            s.strokeStyle = "hsla(" + hue + ", 100%, 50%, .8)";
            s.beginPath();
            s.moveTo(this.x, this.y);
            s.lineTo(d.x, d.y);
            s.closePath();
            s.stroke();
          }
        }
        this.update();
      },

      update: function () {
        s.globalCompositeOperation = "source-over";
        this.color = "hsl(" + hue + ", 100%, 50%)";
        this.x += this.vx;
        this.y += this.vy;

        if (this.x >= s.width || this.x <= 0) {
          this.vx *= -1;
        }

        if (this.y >= s.height || this.y <= 0) {
          this.vy *= -1;
        }
      },
    };

    s.setup = function () {
      for (let i = 0; i < max; i++) {
        const d = new (D as any)();
        d.init();
        dots.push(d);
      }
    };

    s.draw = function () {
      for (const i in dots) {
        dots[i].draw();
      }
    };

    s.update = function () {
      s.fillStyle = clearColor;
      s.fillRect(0, 0, s.width, s.height);
      hue++;
    };

    //using acuall pointer location instead of canvas pointer location as canvas in sat backwards as background
    document.body.addEventListener("mousedown", (ev) => {
      center.x = ev.clientX;
      center.y = ev.clientY;
    });

    // s.mousedown = function () {
    //     center.x = s.mouse.x;
    //     center.y = s.mouse.y;
    // };

    s.resize = function () {
      center.x = s.width / 2;
      center.y = s.height / 2;
      for (const i in dots) {
        dots[i].init();
      }
    };
  }

  async startTyping() {
    const config = {
      //text that should writer display:
      textData: [
        "Oh..",
        "Hello... 👋😄",
        "How are you..?",
        "My name is Osama Soliman",
        "@solimanware",
        "And I am open to new challenges 💪",
        "So do you have a cool challenge for me 😉?",
      ],
      //letter index that writer should start from:
      startIndex: 0,
      //element id that writer should draw to:
      id: "typewriter",
      //time after every letter stroke in ms. the less the more (type speed)
      waitAfter: 50,
    };

    //waiting function //instead of writing setTimeout everytime
    const wait = (ms: number | undefined) =>
      new Promise((r) => setTimeout(r, ms));

    //https://codereview.stackexchange.com/questions/185294/typewriter-animation-implemented-using-recursive-asynchronous-function
    //core function Note dont need text position (n)
    const typeWriter = async (
      text: string,
      elementId: string,
      waitAfter: number | undefined
    ) => {
      var n = 0;
      // Following DOM query only done once saving lots of time
      const el = document.getElementById(elementId);
      // Preventing re flow overhead by using textContent rather than innerHTML
      const render = () => {
        this.typewriter.nativeElement.textContent = text.substring(0, n + 1);
        //ratio that text should resize to fit screen with
        let ratio = n / 30;
        //if not space ...
        if (text[n] !== " ") {
          //apply this ratio
          this.typewriter.nativeElement.style.fontSize = `${5 - ratio}vw`; //es6 template evaluation
        }
      };
      while (n < text.length) {
        requestAnimationFrame(render); // Calls existing function
        // thus avoid unneeded function state capture via closure
        await wait(waitAfter);
        n++; // add after await so render gets
        // the correct value
      }
    };

    // starting our script... using config object with arguments destruction es6
    // trick:
    async function startScript({
      textData,
      id,
      waitAfter,
    }: any): Promise<void> {
      //wait before excuding the script:
      await wait(800);
      for (let text of textData) {
        //wait before wrting the text from text data
        await wait(700);
        await typeWriter(text, id, waitAfter);
        //wait after writing the text
        await wait(700);
      }
    }
    startScript(config);
  }
}
