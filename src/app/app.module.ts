import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanksScreenComponent } from './components/banks-screen/banks-screen.component';
import { ChooseTileScreenComponent } from './components/choose-tile-screen/choose-tile-screen.component';
import { DiyVideoPageComponent } from './components/diy-video-page/diy-video-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { VideoDiyscreenComponent } from './components/video-diyscreen/video-diyscreen.component';
import { SizeProjectComponent } from './components/size-project/size-project.component';

@NgModule({
  declarations: [
    AppComponent,
    BanksScreenComponent,
    ChooseTileScreenComponent,
    DiyVideoPageComponent,
    HomePageComponent,
    LoadingScreenComponent,
    VideoDiyscreenComponent,
    SizeProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
