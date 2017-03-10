import { Component, ViewChild } from '@angular/core';

import { NavController, Slides, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Slides) slider: Slides;

  pushPage: any;

  constructor(public navCtrl: NavController, menu: MenuController) {
    StatusBar.show();
    this.pushPage = SettingPage;
    menu.enable(true, 'menu1');
  }


}
