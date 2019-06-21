import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { ReviewComponent } from './review/review.component';

import "hammerjs";
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ChronologyComponent } from './chronology/chronology.component';
import { ChronologyDirective } from './chronology/chronology.directive';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    BannerComponent,
    HeaderComponent,
    ReviewComponent,
    PracticeAreasComponent,
    MainPageComponent,
    ErrorPageComponent,
    FooterComponent,
    AboutPageComponent,
    ChronologyComponent,
    ChronologyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
