import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html'
})
export class NoticePage {
  classify: string = 'notice';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticePage');
  }

}
