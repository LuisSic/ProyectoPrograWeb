import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import {Videogame} from '../videogame';
import { Guid } from 'guid-typescript';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addvideogame',
  templateUrl: './addvideogame.component.html',
  styleUrls: ['./addvideogame.component.css']
})
export class AddvideogameComponent implements OnInit {
  videogame: Videogame;
  titulo: string;
  plataforma: string;
  edicion: string;
  descripcion: string;
  desarrollado: string;
  clasificacion: string;
  url_imagen: string;
  bandera: boolean;
  constructor(private dataservice: DataService, private location: Location) { }

  ngOnInit() {
    this.bandera = this.dataservice.esActualizar;
    if (this.dataservice.esActualizar === true) {
      this.titulo = this.dataservice.videogameActualizar.titulo_juego;
      this.plataforma = this.dataservice.videogameActualizar.plataforma;
      this.edicion = this.dataservice.videogameActualizar.edicion;
      this.descripcion = this.dataservice.videogameActualizar.descripcion;
      this.desarrollado = this.dataservice.videogameActualizar.desarrolladora;
      this.clasificacion = this.dataservice.videogameActualizar.clasificacion;
      this.url_imagen = this.dataservice.videogameActualizar.url_imagen;
      this.dataservice.esActualizar = false;
    } else {
      this.titulo = '';
      this.plataforma = '';
      this.edicion = '';
      this.descripcion = '';
      this.desarrollado = '';
      this.clasificacion = '';
      this.url_imagen = '';
    }
  }
  updateVideogame() {
    this.videogame = {
      id :  this.dataservice.videogameActualizar.id,
      titulo_juego: this.titulo,
      plataforma: this.plataforma,
      edicion: this.edicion,
      descripcion: this.descripcion,
      desarrolladora: this.desarrollado,
      clasificacion: this.clasificacion,
      url_imagen: this.url_imagen
    };
    this.dataservice.updateVideogame(this.videogame);
    this.dataservice.esActualizar = false;
    console.log(this.videogame.id, this.videogame.titulo_juego);
    this.titulo = '';
    this.plataforma = '';
    this.edicion = '';
    this.descripcion = '';
    this.desarrollado = '';
    this.clasificacion = '';
    this.url_imagen = '';
  }
  addVideogame() {
    this.videogame = {
      id : Guid.raw(),
      titulo_juego: this.titulo,
      plataforma: this.plataforma,
      edicion: this.edicion,
      descripcion: this.descripcion,
      desarrolladora: this.desarrollado,
      clasificacion: this.clasificacion,
      url_imagen: this.url_imagen
    };
    this.dataservice.addVideogame(this.videogame);
    this.dataservice.esActualizar = false;
    console.log(this.videogame.id, this.videogame.titulo_juego);
    this.titulo = '';
    this.plataforma = '';
    this.edicion = '';
    this.descripcion = '';
    this.desarrollado = '';
    this.clasificacion = '';
    this.url_imagen = '';
  }
  goBack(): void {
    this.dataservice.esActualizar = false;
    this.titulo = '';
    this.plataforma = '';
    this.edicion = '';
    this.descripcion = '';
    this.desarrollado = '';
    this.clasificacion = '';
    this.url_imagen = '';
    this.location.back();
  }
}
