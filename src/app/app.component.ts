import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "star-angular";
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;

  enter(i) {
    this.hoverState = i;
  }

  leave() {
    this.hoverState = 0;
  }

  updateRating(i) {
    this.rating = i;
  }
}
