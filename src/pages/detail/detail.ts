import {Component, ChangeDetectorRef, ViewChild} from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  @ViewChild(Content) content: Content;
  showToolbar:boolean = false;

  pushPage: any;

  constructor(public navCtrl: NavController,
              public ref: ChangeDetectorRef,) {
  }

  onScroll($event: any){
      let scrollTop = $event.scrollTop;
      this.showToolbar = scrollTop >= 120;
      this.ref.detectChanges();
  }

}
