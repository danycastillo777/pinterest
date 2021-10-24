import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },

  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'fortnite',
    loadChildren: () => import('./fortnite/fortnite.module').then( m => m.FortnitePageModule)
  },
  {
    path: 'jojo',
    loadChildren: () => import('./jojo/jojo.module').then( m => m.JojoPageModule)
  },
  {
    path: 'horizon',
    loadChildren: () => import('./horizon/horizon.module').then( m => m.HorizonPageModule)
  },
  {
    path: 'lol',
    loadChildren: () => import('./lol/lol.module').then( m => m.LolPageModule)
  },
  {
    path: 'genshin',
    loadChildren: () => import('./genshin/genshin.module').then( m => m.GenshinPageModule)
  },
  
  /* {
    path: 'fortnite',
    loadChildren: () => import('./fortnite/fortnite.module').then( m => m.FortnitePageModule)
  }, */
  
  /*
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  }, */
  /* {
    path: 'fondos',
    loadChildren: () => import('./fondos/fondos.module').then( m => m.FondosPageModule)
  },
  {
    path: 'anime',
    loadChildren: () => import('./anime/anime.module').then( m => m.AnimePageModule)
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
