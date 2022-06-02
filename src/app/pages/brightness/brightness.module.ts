import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrightnessPageRoutingModule } from './brightness-routing.module';

import { BrightnessPage } from './brightness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrightnessPageRoutingModule
  ],
  declarations: [BrightnessPage]
})
export class BrightnessPageModule {}
