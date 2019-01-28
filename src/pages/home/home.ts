import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotesService} from '../../services/notes.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import { items } from '../../app/models/items/items.inteface';
import { CocinaPage } from '../Rooms/cocina/cocina';
import { SalonPage } from '../Rooms/salon/salon';
import { PasilloPage } from '../Rooms/pasillo/pasillo';
import { Baño1Page } from '../Rooms/baño1/baño1';
import { Baño2Page } from '../Rooms/baño2/baño2';
import { Habitacion1Page } from '../Rooms/habitacion1/habitacion1';
import { Habitacion2Page } from '../Rooms/habitacion2/habitacion2';
import { Habitacion3Page } from '../Rooms/habitacion3/habitacion3';
import { GeneralPage } from '../Rooms/general/general';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams
              ) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToCocina() {
    this.navCtrl.push(CocinaPage);
  }
  goToSalon() {
    this.navCtrl.push(SalonPage);
  }
  goToPasillo() {
    this.navCtrl.push(PasilloPage);
  }
  goToBano1() {
    this.navCtrl.push(Baño1Page);
  }
  goToBano2() {
    this.navCtrl.push(Baño2Page);
  }
  goToHabitacion1() {
    this.navCtrl.push(Habitacion1Page);
  }
  goToHabitacion2() {
    this.navCtrl.push(Habitacion2Page);
  }
  goToHabitacion3() {
    this.navCtrl.push(Habitacion3Page);
  }
  goToGeneral() {
    this.navCtrl.push(GeneralPage);
  }

}
