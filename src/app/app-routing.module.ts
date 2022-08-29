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
    path: 'charts',
    loadChildren: () => import('./modules/charts-poc/charts-poc.module').then((m) => m.ChartsPocModule)
  },
  {
    path: 'd3',
    loadChildren: () => import('./modules/d3-poc/d3-poc.module').then((m) => m.D3PocModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'covid-stats'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
