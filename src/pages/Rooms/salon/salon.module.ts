import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonPage } from './salon';

@NgModule({
  declarations: [
    SalonPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonPage),
  ],
})
export class SalonPageModule {}
