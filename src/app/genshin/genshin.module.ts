import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenshinPageRoutingModule } from './genshin-routing.module';

import { GenshinPage } from './genshin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenshinPageRoutingModule
  ],
  declarations: [GenshinPage]
})
export class GenshinPageModule {}
