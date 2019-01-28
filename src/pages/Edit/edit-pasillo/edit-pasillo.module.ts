import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPasilloPage } from './edit-pasillo';

@NgModule({
  declarations: [
    EditPasilloPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPasilloPage),
  ],
})
export class EditPasilloPageModule {}
