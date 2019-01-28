import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotesService} from '../../../services/notes.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import { items } from '../../../app/models/items/items.inteface';
/**
 * Generated class for the Habitacion1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habitacion1',
  templateUrl: 'habitacion1.html',
})
export class Habitacion1Page {

  lista : Observable<items[]>;

  constructor(public navCtrl: NavController,
              public notesServices : NotesService
              ) {

                this.lista = this.notesServices
                .getItemListHabitacion1()  
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
    console.log('ionViewDidLoad Habitacion1Page');
  }
  selectItem(Item:items){
    this.navCtrl.push("EditHabitacion1Page", {"item": Item});
  }
}
