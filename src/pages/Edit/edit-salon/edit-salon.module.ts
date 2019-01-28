import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSalonPage } from './edit-salon';

@NgModule({
  declarations: [
    EditSalonPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSalonPage),
  ],
})
export class EditSalonPageModule {}
