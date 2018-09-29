import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarouselComponent} from './carousel/carousel.component';
import {AddvideogameComponent} from './addvideogame/addvideogame.component';
import {CatalogoComponent} from './catalogo/catalogo.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: '', redirectTo: '/carousel', pathMatch: 'full' },
  { path: 'addvideogame', component: AddvideogameComponent },
  { path: 'carousel', component: CarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}

