import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingPage } from '../pages/setting/setting';
import { JobPage } from '../pages/job/job';
import { MenuPage } from '../pages/menu/menu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingPage,
    JobPage,
    MenuPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingPage,
    JobPage,
    MenuPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
