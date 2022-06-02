import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsomniaPage } from './insomnia.page';

const routes: Routes = [
  {
    path: '',
    component: InsomniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsomniaPageRoutingModule {}
