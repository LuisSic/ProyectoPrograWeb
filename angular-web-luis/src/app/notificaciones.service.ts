import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private notifier: NotifierService;
  public constructor(notifier: NotifierService) {
    this.notifier = notifier;
   }

   public showNotification( type: string, message: string ): void {
     this.notifier.notify( type, message );
    }
}
