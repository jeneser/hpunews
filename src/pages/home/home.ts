import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { NavController, Slides, Tabs, Tab } from 'ionic-angular';

import { SettingPage } from '../setting/setting';
import { JobPage } from '../job/job';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements AfterViewInit {
  @ViewChild(Slides) slider: Slides;
  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = JobPage;
  tab2Root = JobPage;
  tab3Root = JobPage;

  pushPage: any;

  constructor(public navCtrl: NavController) {
    this.pushPage = SettingPage;
  }

  ionViewDidEnter() {
    this.tabRef.select(0);
  }

  ngAfterViewInit() {

  }


  onTabsChange(ev: Tab) {
    var tab_index = ev.index;
    var slider_index = this.slider.getActiveIndex();
    if (tab_index != slider_index) {
      this.slider.slideTo(tab_index);
    }
  }

  onSlideDidChange(s: Slides) {
    var slider_index = s.getActiveIndex();
    var tab_index = this.tabRef.getSelected().index;
    if (tab_index != slider_index) {
      this.tabRef.select(slider_index);
    }
  }

}
