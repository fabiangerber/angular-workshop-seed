import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {FlightSearchComponent} from './pages/flight-search/flight-search.component';
import {HomeComponent} from './pages/home/home.component';
import {SharedModule} from './shared/shared.module';
import { FlightCardComponent } from './pages/flight-search/components/flight-card/flight-card.component';
import { FlightBasketComponent } from './pages/flight-search/components/flight-basket/flight-basket.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { FlightEditComponent } from './pages/flight-edit/flight-edit.component';
import { FlightBookingComponent } from './pages/flight-booking/flight-booking.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'flight-booking',
    component: FlightBookingComponent,
    children: [
      {
        path: '',
        redirectTo:  'flight-search',
        pathMatch: 'full'
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-search/flight-edit/:id',
        component: FlightEditComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '**',
        component: Error404Component
      }
      ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'error404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: 'error404'
  },
];
export const AppRoutesModule = RouterModule.forRoot(APP_ROUTES,
  {
    preloadingStrategy: PreloadAllModules
  }
  );

@NgModule({
  declarations: [
    // Components
    // Directives
    // Pipes
    AppComponent,
    HomeComponent,
    FlightSearchComponent,
    FlightCardComponent,
    FlightBasketComponent,
    Error404Component,
    FlightEditComponent,
    FlightBookingComponent
  ],
  exports: [
    // Modules
    // Components
    // Directives
  ],
  imports: [
    // Modules
    BrowserModule,
    CoreModule,
    SharedModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [
    // Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}


