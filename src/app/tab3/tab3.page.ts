import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  ngOnInit() {
  }

  constructor(private actionSheetController: ActionSheetController) { }

async presentAlert() {
  const actionSheet = await this.actionSheetController.create({
    cssClass: 'my-custom-class',
    buttons: [
      
      {
      text: 'Todo',
      icon: 'apps-sharp',
      handler: () => {
        console.log('Share clicked');
      }
    }, 
    
    {
      text: 'Comentarios',
      icon: 'chatbubble-ellipses-sharp',
    }, 
    

    {
      text: 'Fotos',
      icon: 'image-sharp',
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

}
