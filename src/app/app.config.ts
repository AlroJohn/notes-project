import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

//Firebase Database imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { ModesService } from './services/modes/modes.service';


const firebaseConfig = {
  apiKey: "AIzaSyBQ3V-nMSWp6_SDViPzmjWsaseImuRwSB8",
  authDomain: "fir-angular-72f2f.firebaseapp.com",
  databaseURL: "https://fir-angular-72f2f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-angular-72f2f",
  storageBucket: "fir-angular-72f2f.appspot.com",
  messagingSenderId: "794125619434",
  appId: "1:794125619434:web:66a69318a99978d78d8793"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withViewTransitions(),
    ),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
      provideDatabase(() => getDatabase()),
      BrowserAnimationsModule,
      ModesService
    )
  ]  
};
