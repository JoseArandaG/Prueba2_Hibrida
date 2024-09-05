import { bootstrapApplication, enableDebugTools } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import {defineCustomElements} from 'jeep-sqlite/loader'
import { environment } from './environments/environment.prod';
import { enableProdMode } from '@angular/core';


if (environment.production){
  enableProdMode()
}

defineCustomElements(window)

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
