import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//conectividad a firebase
//  datos de cuenta
import {firebaseConfig} from '../environments/environment';
//  metodo de conectividad
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFirestoreModule} from '@angular/fire/firestore'



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFirestoreModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
