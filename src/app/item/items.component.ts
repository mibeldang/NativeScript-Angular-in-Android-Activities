import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import { Item, Type } from "./item";
import { ItemService } from "./item.service";
import { Router } from "@angular/router";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    @Input() type: Type


    constructor(private itemService: ItemService , private router:Router) { }

    ngOnInit(): void {
        if (this.type == Type.artist) {
            this.items = this.itemService.getArtists()
        } else {
            this.items = this.itemService.getSockerPlayers();
        }

    }

    toAdd(item) {
        var newItem = {
            id: this.items[this.items.length -1].id + 1,
            name: item.name,
            role: item.role,
            type: this.type
        }
        this.itemService.addUserToTheList(newItem)
        this.router.navigate(['/'])
        alert(newItem.name)
        
    }
}
