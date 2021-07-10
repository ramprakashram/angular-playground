import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidCountryDetailViewComponent } from './components/covid-country-detail-view/covid-country-detail-view.component';
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
        path: 'country-detail',
        component: CovidCountryDetailViewComponent
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
