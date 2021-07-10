import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksRxjsPocRoutingModule } from './books-rxjs-poc-routing.module';
import { BooksRxjsPocComponent } from './books-rxjs-poc.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';

@NgModule({
  declarations: [BooksRxjsPocComponent, BookListComponent, BookCollectionComponent],
  imports: [
    CommonModule,
    BooksRxjsPocRoutingModule,
    HttpClientModule
  ]
})
export class BooksRxjsPocModule { }
