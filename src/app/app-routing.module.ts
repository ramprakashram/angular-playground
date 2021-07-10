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
    path: 'covid-stats',
    loadChildren: () => import('./modules/covid-stats/covid-stats.module').then((m) => m.CovidStatsModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'covid-stats'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
