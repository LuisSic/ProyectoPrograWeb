import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {VIDEOGAMES} from '../mock-videogame';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  constructor(private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef) {}
  videogames = VIDEOGAMES;
  ngOnInit() {
  }
  openSimpleModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Simple dialog',
      childComponent: SimpleModalComponent,
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      data: {
        text: 'Some text content'
      }
    });
  }

  openSimpleModalWithCallback() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Dialog with delayed closing',
      childComponent: SimpleModalComponent,
      data: {
        text: 'Some text content. It will close after 1 sec.'
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      onClose: () => new Promise((resolve: any) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      })
    });
  }

  openPromptModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Eliminar videojuego',
      childComponent: SimpleModalComponent,
      data: {
        text: 'Estas seguro que deseas eliminar este videojuego de tu catalodo?'
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
        {
          text: 'Cancelar',
          buttonClass: 'btn btn-success',
          onAction: () => new Promise((resolve: any) => {
            setTimeout(() => {
              resolve();
            }, 20);
          })
        },
        {
          text: 'Aceptar',
          buttonClass: 'btn btn-success',
          onAction: () => {
            alert('As you can see, I will not close this dialog');
          }
        }
      ]
    });
  }

  openMultipleModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Dialog 1',
      childComponent: SimpleModalComponent,
      settings: { closeButtonClass: 'close theme-icon-close' },
      placeOnTop: true,
      data: { text: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` }
    });
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Dialog 2',
      childComponent: SimpleModalComponent,
      settings: { closeButtonClass: 'close theme-icon-close' },
      placeOnTop: true,
      data: { text: `
        Lorem ipsum is placeholder text commonly used in the graphic, print,
        and publishing industries for previewing layouts and visual mockups.` }
    });
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Dialog 3',
      childComponent: SimpleModalComponent,
      settings: { closeButtonClass: 'close theme-icon-close' },
      placeOnTop: true,
      data: { text: 'Some text content' }
    });
  }
}
