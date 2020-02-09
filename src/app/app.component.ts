import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    constructor(private routerExtensions: RouterExtensions) {
    }

    player() {
        this.routerExtensions.navigate(['/soccerplayer']);
    }
   
}
