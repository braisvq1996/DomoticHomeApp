import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotesService} from '../../../services/notes.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import { items } from '../../../app/models/items/items.inteface';
/**
 * Generated class for the Habitacion2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habitacion2',
  templateUrl: 'habitacion2.html',
})
export class Habitacion2Page {

  lista : Observable<items[]>;

  constructor(public navCtrl: NavController,
              public notesServices : NotesService
              ) {

                this.lista = this.notesServices
                .getItemListHabitacion2()  
                .snapshotChanges() 
                .pipe (map ( changes => {
                    return changes.map ( c=>(
                      {
                        key: c.payload.key,
                        ...c.payload.val(),
                      }
                    )
                    )
                }
                )
                )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Habitacion2Page');
  }
  selectItem(Item:items){
    this.navCtrl.push("EditHabitacion2Page", {"item": Item});
  }
}
