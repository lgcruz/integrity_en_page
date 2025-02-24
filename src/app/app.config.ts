import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { provideLottieOptions } from 'ngx-lottie';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      }),
      withViewTransitions({
        skipInitialTransition: true,
        // onViewTransitionCreated(transitionInfo) {
        //   console.log(transitionInfo);

        // }
      })
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
};
