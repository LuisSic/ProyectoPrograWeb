import { Component, OnInit, Input } from '@angular/core';
import { Videogame } from '../videogame';

@Component({
  selector: 'app-addvideogame',
  templateUrl: './addvideogame.component.html',
  styleUrls: ['./addvideogame.component.css']
})
export class AddvideogameComponent implements OnInit {
  @Input() videogame = Videogame;
  constructor() { }

  ngOnInit() {
  }

}
