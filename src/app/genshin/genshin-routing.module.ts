import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenshinPage } from './genshin.page';

const routes: Routes = [
  {
    path: '',
    component: GenshinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenshinPageRoutingModule {}
