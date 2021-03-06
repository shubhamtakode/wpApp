import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SiteDataServiceProvider } from '../providers/site-data-service/site-data-service';
import {PostDetailsPage} from "../pages/post-details/post-details";
import {PostDetailsPageModule} from "../pages/post-details/post-details.module";
import { AppHttpInterceptorProvider } from '../providers/app-http-interceptor/app-http-interceptor';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {OrderByPipe} from "../pipes/order-by/order-by";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {
        backButtonText: '',
        backButtonIcon: 'ios-arrow-back',
        iconMode: 'md'
      }),
    HttpClientModule,
    PostDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SiteDataServiceProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorProvider,
      multi: true
    }
  ]

})
export class AppModule {}
