import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';

import { NavController, MenuController, Content } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Content) content: Content;
  showToolbar:boolean = false;

  pushPage: any;

  constructor(public navCtrl: NavController,
              menu: MenuController,
              public ref: ChangeDetectorRef,) {
    this.pushPage = DetailPage;
    menu.enable(true, 'menu1');
  }

  onScroll($event: any){
      let scrollTop = $event.scrollTop;
      this.showToolbar = scrollTop >= 120;
      this.ref.detectChanges();
  }

}
