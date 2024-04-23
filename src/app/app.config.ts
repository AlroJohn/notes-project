import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


//Firebase Database imports
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyAgfcipEPZtBv-BgZNOfnL2mZmmAlloKms",
  authDomain: "notes-600c5.firebaseapp.com",
  databaseURL: "https://notes-600c5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notes-600c5",
  storageBucket: "notes-600c5.appspot.com",
  messagingSenderId: "810293665554",
  appId: "1:810293665554:web:4467bbdbdabdfa6c8f5dcb"
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withViewTransitions(),
    ),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideDatabase(() => getDatabase()),
    ],
      BrowserAnimationsModule,
      FormsModule,
      FlexLayoutModule
      
      
    ),
  ]  
  
};
export class FirebaseModule { }
