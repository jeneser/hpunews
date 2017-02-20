import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  catalogArray = ['rec', 'news', 'logistic', 'notice', 'job'];
  catalog: string = this.catalogArray[0];

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

  swipeEvent(event) {
    // 左滑
    if (event.direction === 2) {
      if (this.catalogArray.indexOf(this.catalog) < this.catalogArray.length - 1) {
        this.catalog = this.catalogArray[this.catalogArray.indexOf(this.catalog) + 1];
      }
    }
    // 右滑
    if (event.direction === 4) {
      if (this.catalogArray.indexOf(this.catalog) > 0) {
        this.catalog = this.catalogArray[this.catalogArray.indexOf(this.catalog) - 1];
      }
    }
  }

}
