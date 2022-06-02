import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'app-update',
    loadChildren: () => import('./pages/app-update/app-update.module').then( m => m.AppUpdatePageModule)
  },
  {
    path: 'brightness',
    loadChildren: () => import('./pages/brightness/brightness.module').then( m => m.BrightnessPageModule)
  },
  {
    path: 'insomnia',
    loadChildren: () => import('./pages/insomnia/insomnia.module').then( m => m.InsomniaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
