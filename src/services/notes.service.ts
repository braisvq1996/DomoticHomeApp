import {Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import { items } from '../app/models/items/items.inteface';

@Injectable()
export class NotesService{

    //domotichomeappdatabase

    private ListaCocina = this.afDB.list<items>('/cocina');
    private ListaBaño1 = this.afDB.list<items>('/baño');
    private ListaBaño2 = this.afDB.list<items>('/baño2');
    private ListaSalon = this.afDB.list<items>('/salon');
    private ListaPasillo = this.afDB.list<items>('/pasillo');
    private ListaHabitacion1 = this.afDB.list<items>('/habitacion1');
    private ListaHabitacion2 = this.afDB.list<items>('/habitacion2');
    private ListaHabitacion3 = this.afDB.list<items>('/habitacion3');
    private ListaGeneral = this.afDB.list<items>('/general');

    
    constructor(public afDB: AngularFireDatabase){

    }

    getItemListGeneral(){
      return this.ListaGeneral;
    }

   getItemListCocina(){
    return this.ListaCocina;
  }
  
  getItemListBaño1(){
    return this.ListaBaño1;
  }
  getItemListBaño2(){
    return this.ListaBaño2;
  }
  getItemListSalon(){
    return this.ListaSalon;
  }
  getItemListPasillo(){
    return this.ListaPasillo;
  }
  getItemListHabitacion1(){
    return this.ListaHabitacion1;
  }
  getItemListHabitacion2(){
    return this.ListaHabitacion2;
  }
  getItemListHabitacion3(){
    return this.ListaHabitacion3;
  }




  editItemGeneral(item:items){
    return this.ListaGeneral.update(item.key, item);
  }
  editItemCocina(item:items){
    return this.ListaCocina.update(item.key, item);
  }
  editItemSalon(item:items){
    return this.ListaSalon.update(item.key, item);
  }
  editItemPasillo(item:items){
    return this.ListaPasillo.update(item.key, item);
  }
  editItemBaño1(item:items){
    return this.ListaBaño1.update(item.key, item);
  }
  editItemBaño2(item:items){
    return this.ListaBaño2.update(item.key, item);
  }
  editItemHabitacion1(item:items){
    return this.ListaHabitacion1.update(item.key, item);
  }
  editItemHabitacion2(item:items){
    return this.ListaHabitacion2.update(item.key, item);
  }
  editItemHabitacion3(item:items){
    return this.ListaHabitacion3.update(item.key, item);
  }
}