import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'practices', component: PracticeAreasComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
