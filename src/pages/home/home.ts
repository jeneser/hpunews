import { Component, ViewChild } from '@angular/core';

import { NavController, Slides, MenuController } from 'ionic-angular';

import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Slides) slider: Slides;

  pushPage: any;

  constructor(public navCtrl: NavController, menu: MenuController) {
    this.pushPage = SettingPage;
    menu.enable(true, 'menu1');
  }


}
