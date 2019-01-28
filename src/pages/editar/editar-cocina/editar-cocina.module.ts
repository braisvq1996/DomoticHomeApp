import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarCocinaPage } from './editar-cocina';

@NgModule({
  declarations: [
    EditarCocinaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarCocinaPage),
  ],
})
export class EditarCocinaPageModule {}
