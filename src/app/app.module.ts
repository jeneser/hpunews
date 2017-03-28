import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavoritePage } from '../pages/favorite/favorite';
import { FocusPage } from '../pages/focus/focus';
import { LogisticsPage } from '../pages/logistics/logistics';
import { NoticePage } from '../pages/notice/notice';
import { ClubPage } from '../pages/club/club';
import { JobPage } from '../pages/job/job';
import { SettingPage } from '../pages/setting/setting';
import { DetailPage } from '../pages/detail/detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavoritePage,
    FocusPage,
    LogisticsPage,
    NoticePage,
    ClubPage,
    JobPage,
    SettingPage,
    DetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritePage,
    FocusPage,
    LogisticsPage,
    NoticePage,
    ClubPage,
    JobPage,
    SettingPage,
    DetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
