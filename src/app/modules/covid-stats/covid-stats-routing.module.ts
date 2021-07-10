import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidStatCountrySummaryComponent } from './components/covid-stat-country-summary/covid-stat-country-summary.component';
import { CovidStatsComponent } from './covid-stats.component';

const routes: Routes = [
  {
    path: '',
    component: CovidStatsComponent,
    children: [
      {
        path: 'summary',
        component: CovidStatCountrySummaryComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'summary'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidStatsRoutingModule { }
