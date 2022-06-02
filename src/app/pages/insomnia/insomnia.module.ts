import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsomniaPageRoutingModule } from './insomnia-routing.module';

import { InsomniaPage } from './insomnia.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsomniaPageRoutingModule
  ],
  declarations: [InsomniaPage]
})
export class InsomniaPageModule {}
