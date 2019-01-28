import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasilloPage } from './pasillo';

@NgModule({
  declarations: [
    PasilloPage,
  ],
  imports: [
    IonicPageModule.forChild(PasilloPage),
  ],
})
export class PasilloPageModule {}
