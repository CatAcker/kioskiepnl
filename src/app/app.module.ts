import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanksScreenComponent } from './banks-screen/banks-screen.component';
import { ChooseTileScreenComponent } from './choose-tile-screen/choose-tile-screen.component';
import { DiyVideoPageComponent } from './diy-video-page/diy-video-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { VideoDiyscreenComponent } from './video-diyscreen/video-diyscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    BanksScreenComponent,
    ChooseTileScreenComponent,
    DiyVideoPageComponent,
    HomePageComponent,
    LoadingScreenComponent,
    VideoDiyscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
