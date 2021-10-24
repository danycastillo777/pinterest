import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JojoPage } from './jojo.page';

const routes: Routes = [
  {
    path: '',
    component: JojoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JojoPageRoutingModule {}
