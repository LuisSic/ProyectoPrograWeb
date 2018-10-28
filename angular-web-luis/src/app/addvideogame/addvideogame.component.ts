import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import {Videogame} from '../videogame';
import { Guid } from 'guid-typescript';
import { Location } from '@angular/common';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Component({
  selector: 'app-addvideogame',
  templateUrl: './addvideogame.component.html',
  styleUrls: ['./addvideogame.component.css']
})
export class AddvideogameComponent implements OnInit {
  videogame: Videogame;
  id: string;
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
      this.dataservice.ActualizarTrue(this.dataservice.videogameActualizar).then( result => {
        this.id = result[0]._id;
        this.titulo = result[0].titulo_juego;
        this.plataforma = result[0].plataforma;
        this.edicion = result[0].edicion;
        this.descripcion = result[0].descripcion;
        this.desarrollado = result[0].desarrolladora;
        this.clasificacion = result[0].clasificacion;
        this.url_imagen = result[0].url_imagen;
        this.dataservice.esActualizar = false;
      }).catch((err) => {
        console.log(err);
      });
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
    const obj = {
      titulo_juego: this.titulo,
      plataforma: this.plataforma,
      edicion: this.edicion,
      descripcion: this.descripcion,
      desarrolladora: this.desarrollado,
      clasificacion: this.clasificacion,
      url_imagen: this.url_imagen
    };
    this.dataservice.updateVideogame(this.id, obj);
    this.dataservice.esActualizar = false;
    this.titulo = '';
    this.plataforma = '';
    this.edicion = '';
    this.descripcion = '';
    this.desarrollado = '';
    this.clasificacion = '';
    this.url_imagen = '';
  }
  addVideogame() {
    const videogame = {
      titulo_juego: this.titulo,
      plataforma: this.plataforma,
      edicion: this.edicion,
      descripcion: this.descripcion,
      desarrolladora: this.desarrollado,
      clasificacion: this.clasificacion,
      url_imagen: this.url_imagen
    };
    this.dataservice.addVideogame(videogame);
    this.dataservice.esActualizar = false;
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
