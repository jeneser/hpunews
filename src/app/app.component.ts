import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { FavoritePage } from '../pages/favorite/favorite';
import { FocusPage } from '../pages/focus/focus';
import { LogisticsPage } from '../pages/logistics/logistics';
import { NoticePage } from '../pages/notice/notice';
import { ClubPage } from '../pages/club/club';
import { JobPage } from '../pages/job/job';
import { SettingPage } from '../pages/setting/setting';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  focusPages: Array<{title: string, component: any, icon: string}>;
  tagPages: Array<{title: string, component: any, icon: string}>;
  otherPages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.focusPages = [
      { title: '理工大事件', component: HomePage, icon: 'md-cube' },
      { title: '我感兴趣的', component: FavoritePage, icon: 'md-analytics' }
    ];
    this.tagPages = [
      { title: '要闻', component: FocusPage, icon: 'md-list-box' },
      { title: '后勤', component: LogisticsPage, icon: 'md-bookmarks' },
      { title: '公告', component: NoticePage, icon: 'md-archive' },
      { title: '社团', component: ClubPage, icon: 'md-chatboxes' },
      { title: '招聘', component: JobPage, icon: 'md-briefcase' }
    ];
    this.otherPages = [
      { title: '设置', component: SettingPage, icon: 'md-settings' },
      { title: '关于', component: AboutPage, icon: 'md-alert' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        // StatusBar.backgroundColorByHexString('#003779f9');
      }
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
