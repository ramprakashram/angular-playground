import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksRxjsPocComponent } from './books-rxjs-poc.component';

const routes: Routes = [
  {
    path: '',
    component: BooksRxjsPocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRxjsPocRoutingModule { }
