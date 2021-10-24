import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JojoPageRoutingModule } from './jojo-routing.module';

import { JojoPage } from './jojo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JojoPageRoutingModule
  ],
  declarations: [JojoPage]
})
export class JojoPageModule {}
