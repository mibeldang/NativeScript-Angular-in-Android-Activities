import { Injectable } from "@angular/core";

import { Item, Type } from "./item";
import { EventData } from "tns-core-modules/ui/page/page";


@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "mibel", role: "Goalkeeper", type: Type.artist },
        { id: 2, name: "nabelle", role: "Goalkeeper", type: Type.soccerplayer },
        { id: 3, name: "Piqué", role: "Defender", type: Type.soccerplayer },
        { id: 4, name: "I. Rakitic", role: "Setter", type: Type.artist },
        { id: 5, name: "Sergio", role: "Midfielder", type: Type.soccerplayer },
        { id: 6, name: "Luz", role: "Goalkeeper", type: Type.artist },
        { id: 7, name: "Ana", role: "Setter", type: Type.soccerplayer },
        { id: 8, name: "Mea", role: "Defender", type: Type.artist },
        { id: 9, name: "Shadklyn", role: "Midfielder", type: Type.soccerplayer },
        { id: 10, name: "JanJan", role: "Goalkeeper", type: Type.artist },
    );


    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
    updateData(id: any) {
        return this.items.find(id)
    }

    getSockerPlayers(): Array<Item> {
        var listPlayers: Array<Item> = []
        listPlayers = this.items.filter((item) => (item.type === Type.soccerplayer))
        return listPlayers;
    }

    getArtists(): Array<Item> {
        var listArtists: Array<Item> = []
        listArtists = this.items.filter((item) => (item.type === Type.artist))
        return listArtists
    }

    addUserToTheList(value) {
        this.items.push({
            id: this.items[this.items.length - 1].id + 1,
            name: value.name,
            role: value.role,
            type: value.type
        })
    }


}
