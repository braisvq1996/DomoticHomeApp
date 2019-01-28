import {NotesService} from '../../../services/notes.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { items } from '../../../app/models/items/items.inteface';
/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-habitacion1',
  templateUrl: 'edit-habitacion1.html',
})
export class EditHabitacion1Page {

  item : items;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private servicioLista: NotesService,
              private toast: ToastController) {
    console.log(navParams.get("item") );
    this.item = navParams.get ("item");
  }

  guardarItem(item:items){

    this.servicioLista.editItemHabitacion1(item)
          .then(()=>{
            this.navCtrl.setRoot("HomePage");
            this.mensaje("item cambiado");
          }
          )
  }

  
  mensaje (texto:string)
  {
    const toast = this.toast.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
}
