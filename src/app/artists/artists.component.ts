import { Component, OnInit } from '@angular/core';
import { Type } from '~/app/item/item';

@Component({
  selector: 'ns-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  typeArtist = Type.artist

  constructor() { }

  ngOnInit() {
  }

 

}
