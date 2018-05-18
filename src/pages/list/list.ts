import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
webmedia : any;
artist : any;
list : any;
apiUrl = 'https://itunes.apple.com/search?term=';
  constructor(public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  this.artist = encodeURI(this.navParams.get('data'));
  this.getList();
  }

  ionViewDidLoad() {
    console.log(this.artist);
  }

	getList() {
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl+this.artist+'&media=music&&sort=popularitylimit=25&country=id').subscribe(data => {
	      resolve(data);
	      this.list = data['results'];
	      console.log(this.list);
	    }, err => {
	      console.log(err);
	    });
	  });
	}

	  play(soundFile){		
		console.log(soundFile);
			
      if(this.webmedia) {
				this.webmedia.pause();
			}

			this.webmedia = new Audio(soundFile);
			this.webmedia.load();
			this.webmedia.play();

  }
}
