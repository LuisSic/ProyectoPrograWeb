import { Injectable } from '@angular/core';
import {Videogame} from './videogame';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  videogames = {};
  esActualizar = false;
  videogameActualizar;
  constructor() {
    this.videogames = {};
  }

  getVideogames (): {} {
    if (localStorage.getItem('videogames') === null) {
      this.videogames = {};
    } else {

      this.videogames =  JSON.parse(localStorage.getItem('videogames'));
    }
    return this.videogames;
  }

  ActualizarTrue (videogame: Videogame): void {
    this.esActualizar = true;
    this.videogameActualizar = videogame;
  }

  addVideogame (videogame: Videogame): void {
   this.videogames[videogame.id] = videogame;
    let videogames;
    if (localStorage.getItem('videogames') === null) {
      videogames = {};
      videogames[videogame.id] = videogame;
      localStorage.setItem( 'videogames' , JSON.stringify(videogames));
    } else {
      videogames = JSON.parse(localStorage.getItem('videogames'));
      videogames[videogame.id] = videogame;
      localStorage.setItem( 'videogames' , JSON.stringify(videogames));
    }
  }

  removeVideogame (videogame: Videogame): void {
    let id;
    id = videogame.id;
    delete this.videogames[id];
    localStorage.setItem( 'videogames' , JSON.stringify(this.videogames));
  }
  updateVideogame (videogame: Videogame): void {
    this.videogames[videogame.id] = videogame;
    localStorage.setItem( 'videogames' , JSON.stringify(this.videogames));
  }
}
