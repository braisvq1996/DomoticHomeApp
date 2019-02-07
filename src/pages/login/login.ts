import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from '../home/home';
import { RegisterPage } from '../register/register';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Sesion iniciada',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
    .then( data => {
      console.log('informacion conseguida', this.fire.auth.currentUser);
      this.alert('Acceso a\ Basedatos concedida');
      this.navCtrl.push( HomePage );

      this.user.value="";
      this.password.value="";
    })
    .catch( error => {
      console.log('error obtenido', error);
      this.alert(error.message);
    })
  	console.log('Inicia sesion con ', this.user.value, this.password.value);
  }

  Register(){
    this.navCtrl.push( RegisterPage );
  }

}
