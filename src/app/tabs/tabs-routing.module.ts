import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  /* redirect */
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },

      
      {
        path: 'mensajes',
        loadChildren: () => import('../mensajes/mensajes.module').then(m => m.MensajesPageModule)
      },
      
       {
        path: 'fortnite',
        loadChildren: () => import('../fortnite/fortnite.module').then( m => m.FortnitePageModule)
      },

      {
        path: 'jojo',
        loadChildren: () => import('../jojo/jojo.module').then( m => m.JojoPageModule)
      },

      {
        path: 'horizon',
        loadChildren: () => import('../horizon/horizon.module').then( m => m.HorizonPageModule)
      },

      {
        path: 'lol',
        loadChildren: () => import('../lol/lol.module').then( m => m.LolPageModule)
      },

      {
        path: 'genshin',
        loadChildren: () => import('../genshin/genshin.module').then( m => m.GenshinPageModule)
      },

      /*
      {
        path: 'anime',
        loadChildren: () => import('').then( m => m.AnimePageModule)
      }, */
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
