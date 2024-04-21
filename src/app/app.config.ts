import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withViewTransitions(),

    ),
    importProvidersFrom(
      // provideFirebaseApp(() => initializeApp(firebaseConfig)),
      // provideAuth(() => getAuth()),
      // provideDatabase(() => getDatabase()),
      BrowserAnimationsModule,
    )
  ]

  
};
