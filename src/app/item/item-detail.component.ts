import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item, Type } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    score = 0
    stitchDoraemon: string
    shown = true
    shownIncrease = true
    edit = false
     

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);

        
        
    }
    onIncrease() {
        this.score += 1
        if(this.score > 0){
            this.shownIncrease = !this.shownIncrease
        }
        this.stitchDoraemon = "https://ih1.redbubble.net/image.231300542.3652/sticker,375x360.u1.png"
       
    }
    onDecrease() {
        this.score -= 1
        if(this.score > 0){
            this.shown = !this.shown
        }
        this.stitchDoraemon = "https://i.pinimg.com/originals/e6/63/18/e6631832c5ff0ac2077b8dbeeac666fb.gif"
    }
    update(){
        this.edit = !this.edit
    }

    toEdit(item){
        this.item.name = item.name
        this.item.role = item.role
        this.item.type=item.Type
        this.update()
    }
    

 
}
