import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { AddvideogameComponent } from './addvideogame/addvideogame.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { FormsModule } from '@angular/forms';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AddvideogameComponent,
    CatalogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalDialogModule.forRoot(),
    FormsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
