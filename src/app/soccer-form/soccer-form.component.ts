import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '~/app/item/item.service';
import { Type } from '~/app/item/item';
import { RouterModule, RouterLink, Route, Router } from '@angular/router';

@Component({
  selector: 'ns-soccer-form',
  templateUrl: './soccer-form.component.html',
  styleUrls: ['./soccer-form.component.css']
})
export class SoccerFormComponent implements OnInit {

  @Input() name: string
  @Input() role: string
  @Output() editItem = new EventEmitter()


  constructor(private itemService: ItemService, private router: Router) {

  }
  ngOnInit() {
    this.itemService.getSockerPlayers()
  }

  onSubmit() {
    this.editItem.emit({
      name: this.name,
      role: this.role,
      type:Type

    })
    this.name = ""
    this.role = ""
  }
  toAdd(item) {
    var newItem = {
      name: item.name,
      role: item.role,
      type: Type
    }
    this.itemService.addUserToTheList(newItem)
    this.router.navigate(['/'])
  }


}
