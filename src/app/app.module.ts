import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './core/store/books-store/books.reducer';
import { CovidEffects } from './core/store/covid-store/covid.effects';
import { collectionsReducer } from './core/store/books-store/collections.reducer';
import { covidReducer } from './core/store/covid-store/covid.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionsReducer,
      covid: covidReducer
    }),
    NgbModule,
    EffectsModule.forRoot([CovidEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
