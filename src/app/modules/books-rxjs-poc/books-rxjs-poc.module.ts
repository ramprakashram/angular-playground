import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRxjsPocRoutingModule } from './books-rxjs-poc-routing.module';
import { BooksRxjsPocComponent } from './books-rxjs-poc.component';


@NgModule({
  declarations: [BooksRxjsPocComponent],
  imports: [
    CommonModule,
    BooksRxjsPocRoutingModule
  ]
})
export class BooksRxjsPocModule { }
