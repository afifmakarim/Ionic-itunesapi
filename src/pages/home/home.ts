import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
artistName: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  toList(artistName){
  if(this.artistName){
    this.navCtrl.push(ListPage, {data: artistName});
  }else{
  console.log('kosong');
  }
  }

}
