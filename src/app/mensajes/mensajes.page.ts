import { Component, ViewChild} from '@angular/core';

import { IonContent } from '@ionic/angular';

import {  OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

interface message{
  user: string;
  createdAt: number;
  msg: string;
  
}

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})

export class MensajesPage implements OnInit {

  ngOnInit() {
  }

  constructor(private actionSheetController: ActionSheetController) { }

async presentAlert() {
  const actionSheet = await this.actionSheetController.create({
    cssClass: 'my-custom-class',
    buttons: [
      
      {
      text: 'Reportar Chat',
      icon: 'warning-outline',
      handler: () => {
        console.log('Share clicked');
      }
    }, 
  
    {
      text: 'Fijar comentario',
      icon: 'star-outline',
    }, 
    

    {
      text: 'Eliminar',
      icon: 'trash-outline',
      handler: () => {
        console.log('Play clicked');
      }
    }, 
  
  ],
  });
  await actionSheet.present();

  const { role } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

  Mensaje: message[]=[
    {
      user: 'Frank',
      createdAt: 123456789,
      msg: 'hoy tenemos parcial!!!'
    },
    {
      user: 'Hersson',
      createdAt: 133656479,
      msg: 'NOO te creo man'
    },
    {
      user: 'Frank',
      createdAt: 123256285,
      msg: 'Si man hoy es!!'
    },
  ]


  currentUser ='Hersson';
  newMsg = '';

  @ViewChild (IonContent) content: IonContent

  sendMessage(){

    this.Mensaje.push({
        user: 'Hersson',
        createdAt: new Date().getTime(),
        msg: this.newMsg
    });

    this.newMsg = '';

    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }


}


