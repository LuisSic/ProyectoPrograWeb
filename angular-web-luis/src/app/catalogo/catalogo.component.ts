import { Component, OnInit } from '@angular/core';
import {VIDEOGAMES} from '../mock-videogame';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  videogames = VIDEOGAMES;

  constructor() { }

  ngOnInit() {
  }
}
