import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { ApiServiceProvider } from 'src/app/providers/api-service';

import { AngularFireModule } from '@angular/fire';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';



import { IonicStorageModule } from '@ionic/storage';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirebaseAuthService } from 'src/app/providers/firebase-auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';





@NgModule({

  declarations: [AppComponent],

  entryComponents: [],

  imports: [BrowserModule, IonicModule.forRoot(), 

    IonicStorageModule.forRoot(), 

    AppRoutingModule, 

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule, AngularFireStorageModule],

  providers: [

    StatusBar,

    SplashScreen,

    ApiServiceProvider,
    FirebaseAuthService,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],

  bootstrap: [AppComponent]

})

export class AppModule {}