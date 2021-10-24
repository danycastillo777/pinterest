import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-fortnite',
  templateUrl: './fortnite.page.html',
  styleUrls: ['./fortnite.page.scss'],
})
export class FortnitePage implements OnInit {

  ngOnInit() {
  }
  
  option = {
    slidesPerView: 2.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 40,
  }
  
  constructor(private actionSheetController: ActionSheetController) { }

async presentAlert() {
  const actionSheet = await this.actionSheetController.create({
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Compartir',
      icon: 'share-social-sharp',
      handler: () => {
        console.log('Share clicked');
      }
    }, 
    
    {
      text: 'Guardar Imagen',
      icon: 'bookmark-sharp',
    }, 
    

    {
      text: 'Ocultar Pin',
      icon: 'close-sharp',
      handler: () => {
        console.log('Play clicked');
      }
    }, 
    
    {
      text: 'Enviar por Whatsapp',
      icon: 'logo-whatsapp',
      handler: () => {
        console.log('Cancel clicked');
      }
    },

    {
      text: 'Comentar',
      icon: 'chatbubble-sharp',
      handler: () => {
        console.log('Cancel clicked');
      }
    }
  
  ],
  });
  await actionSheet.present();

  const { role } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
}









