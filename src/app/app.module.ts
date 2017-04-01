import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2'

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "09aKQT0URN4VQ4hleUzaSyA4PxADTAc5JNscE09",
  authDomain: "todoapp-2a3c7.firebaseapp.com",
  databaseURL: "https://todoapp-2a3c7.firebaseio.com",
  projectId: "todoapp-2a3c7",
  storageBucket: "todoapp-2a3c7.appspot.com",
  messagingSenderId: "882499548301"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
