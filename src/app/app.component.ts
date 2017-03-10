import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { JobPage } from '../pages/job/job';
import { SettingPage } from '../pages/setting/setting';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: '要闻', component: HomePage },
      { title: '后勤', component: JobPage },
      { title: '公告', component: JobPage },
      { title: '学院', component: JobPage },
      { title: '招聘', component: JobPage },
      { title: '设置', component: SettingPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        StatusBar.backgroundColorByHexString('#4D3779f9');
      }
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
