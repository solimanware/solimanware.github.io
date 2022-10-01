import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sendEmailFromForm(
    name: string,
    email: string,
    phone: string,
    message: string
  ) {
    const myEmail = "solimanware@gmail.com";
    window.open(
      `mailto:${myEmail}?subject=Contact from ${name} - ${email} - ${phone}&body=${message}`
    );
  }
}
