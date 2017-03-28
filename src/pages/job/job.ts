import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavController, MenuController, Content } from 'ionic-angular';

@Component({
  selector: 'page-job',
  templateUrl: 'job.html'
})
export class JobPage {

  @ViewChild(Content) content: Content;
  showToolbar:boolean = false;

  pushPage: any;

  constructor(public navCtrl: NavController,
              menu: MenuController,
              public ref: ChangeDetectorRef,) {
  }

  onScroll($event: any){
      let scrollTop = $event.scrollTop;
      this.showToolbar = scrollTop >= 120;
      this.ref.detectChanges();
  }

}
