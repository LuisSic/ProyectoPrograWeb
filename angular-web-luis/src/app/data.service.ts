import axios from 'axios';
import { AxiosInstance } from 'axios';
import { Injectable } from '@angular/core';
import {Videogame} from './videogame';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  videogames;
  esActualizar = false;
  videogameActualizar;
  private axiosClient: AxiosInstance;
  constructor() {
    this.videogames = {};
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:3000/videogame',
      timeout: 1000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    });
  }
  getVideogames () {
    const promise = new Promise((resolve, reject) => {
      let dictionary;
      dictionary = {};
      this.axiosClient.get('/')
      .then(function (response) {
        response.data.forEach(element => {
          dictionary[element._id] = element;
        });
        resolve(dictionary);
      })
      .catch(function (error) {
        reject(error.response.data.message);
      });
    });
    return promise;
  }

  ActualizarTrue (videogame: String) {
    const promise = new Promise((resolve, reject) => {
      this.axiosClient.get('/' + videogame)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error.response.data.message);
      });
    });
    return promise;
  }

  addVideogame (videogame): void {
    this.axiosClient.post('/', JSON.stringify(videogame))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
    });
  }

  removeVideogame (videogame: Videogame) {
    const promise = new Promise((resolve, reject) => {
      this.axiosClient.delete('/' + videogame._id)
      .then(function (response) {
        console.log(response);
        resolve(response);
      })
      .catch(function (error) {
        // console.log(error.data);
        reject(error.response.data.message);
      });
    });
    return promise;
  }

  updateVideogame (id: string, videogame): void {
    this.axiosClient.put('/' + id, JSON.stringify(videogame))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
    });
  }
}


