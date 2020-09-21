import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { ROOT_REDUCERS, metaReducers } from './reducers/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    // StoreModule.forRoot(),

    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default

        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,

        // TODO: I use ngmodel in update user, and this break the StateImmutability
        // this is anti-pattern to use ngrx, you shall find another way to implement
        // the update user functionality

        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),

    StoreRouterConnectingModule.forRoot(),

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
