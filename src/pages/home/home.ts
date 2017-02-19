import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  catalog: string = 'rec';

  constructor(public navCtrl: NavController) {

  }

  doRefresh(refresher) {
    setTimeout(() => {
      console.log('refresher ok!');
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      console.log('infiniteScroll ok!');
      infiniteScroll.complete();
    }, 2000);
  }


}
