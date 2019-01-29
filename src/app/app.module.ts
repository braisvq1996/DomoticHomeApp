import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {NotesService} from '../services/notes.service';

import { MyApp } from './app.component';

import {Baño1Page} from '../pages/Rooms/baño1/baño1';
import {Baño2Page} from '../pages/Rooms/baño2/baño2';
import {CocinaPage} from '../pages/Rooms/cocina/cocina';
import {SalonPage} from '../pages/Rooms/salon/salon';
import {PasilloPage} from '../pages/Rooms/pasillo/pasillo';
import {Habitacion1Page} from '../pages/Rooms/habitacion1/habitacion1';
import {Habitacion2Page} from '../pages/Rooms/habitacion2/habitacion2';
import {Habitacion3Page} from '../pages/Rooms/habitacion3/habitacion3';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { GeneralPage } from '../pages/Rooms/general/general';
import { HomePageModule } from '../pages/home/home.module';
import { CocinaPageModule } from '../pages/Rooms/cocina/cocina.module';
import { SalonPageModule } from '../pages/Rooms/salon/salon.module';
import { GeneralPageModule } from '../pages/Rooms/general/general.module';
import { PasilloPageModule } from '../pages/Rooms/pasillo/pasillo.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { LoginPageModule } from '../pages/login/login.module';
import { Baño1PageModule } from '../pages/Rooms/baño1/baño1.module';
import { EditBaño2PageModule } from '../pages/Edit/edit-baño2/edit-baño2.module';
import { Habitacion1PageModule } from '../pages/Rooms/habitacion1/habitacion1.module';
import { Habitacion2PageModule } from '../pages/Rooms/habitacion2/habitacion2.module';
import { Habitacion3PageModule } from '../pages/Rooms/habitacion3/habitacion3.module';


export const firebaseConfig = {
  apiKey: "AIzaSyBctQWhUVFP9kBIxsLmvg-lQqQD97m3lNU",
    authDomain: "domotichomeappdatabase.firebaseapp.com",
    databaseURL: "https://domotichomeappdatabase.firebaseio.com",
    projectId: "domotichomeappdatabase",
    storageBucket: "domotichomeappdatabase.appspot.com",
    messagingSenderId: "448847901767"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HomePageModule,
    CocinaPageModule,
    SalonPageModule,
    GeneralPageModule,
    PasilloPageModule,
    RegisterPageModule,
    LoginPageModule,
    Baño1PageModule,
    EditBaño2PageModule,
    Habitacion1PageModule,
    Habitacion2PageModule,
    Habitacion3PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
