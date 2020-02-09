import { Component, OnInit} from '@angular/core';
import { Type } from '~/app/item/item';

@Component({
  selector: 'ns-soccerplayer',
  templateUrl: './soccerplayer.component.html',
  styleUrls: ['./soccerplayer.component.css']
})
export class SoccerplayerComponent implements OnInit {

  typeSoccerPlayer = Type.soccerplayer

  constructor() { }

  ngOnInit() {
  }

}
