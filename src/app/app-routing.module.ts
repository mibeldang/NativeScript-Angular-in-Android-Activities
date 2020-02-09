import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { AnnaluzComponent } from "~/app/annaluz/annaluz.component";
import { ArtistsComponent } from "~/app/artists/artists.component";
import { AppComponent } from "~/app/app.component";
import { SoccerplayerComponent } from "~/app/soccerplayer/soccerplayer.component";


const routes: Routes = [
    
    {path:"",redirectTo: "/home", pathMatch: "full"},
    {path: "home", component:AppComponent},
    {path: "artists", component: ArtistsComponent},
    { path: "soccerplayer", component: SoccerplayerComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "gridLayout", component: AnnaluzComponent},
    { path: "items", component: ItemsComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
