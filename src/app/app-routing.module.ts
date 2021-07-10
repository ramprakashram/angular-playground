import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () => import('./modules/forms/forms.module').then((m) => m.FormsPlayGroundModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/books-rxjs-poc/books-rxjs-poc.module').then((m) => m.BooksRxjsPocModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
