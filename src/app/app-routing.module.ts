import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BanksScreenComponent } from './components/banks-screen/banks-screen.component';
import { ChooseTileScreenComponent } from './components/choose-tile-screen/choose-tile-screen.component';
import { DiyVideoPageComponent } from './components/diy-video-page/diy-video-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { VideoDiyscreenComponent } from './components/video-diyscreen/video-diyscreen.component';
import { SizeProjectComponent } from './components/size-project/size-project.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'diy-tutorials', component: DiyVideoPageComponent},
  {path: 'video-DIY', component: VideoDiyscreenComponent},
  {path:'choose-tile', component: ChooseTileScreenComponent},
  {path:'size-project', component: SizeProjectComponent},
  {path:'loading-screen', component: LoadingScreenComponent},
  {path:'banks-screen', component: BanksScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
