import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidStatsRoutingModule } from './covid-stats-routing.module';
import { CovidStatsComponent } from './covid-stats.component';
import { CovidStatHeaderComponent } from './components/covid-stat-header/covid-stat-header.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidStatCountrySummaryComponent } from './components/covid-stat-country-summary/covid-stat-country-summary.component';
import { CovidStatCountryCardComponent } from './components/covid-stat-country-card/covid-stat-country-card.component';


@NgModule({
  declarations: [CovidStatsComponent, CovidStatHeaderComponent, CovidStatCountrySummaryComponent, CovidStatCountryCardComponent],
  imports: [
    CommonModule,
    CovidStatsRoutingModule,
    HttpClientModule
  ]
})
export class CovidStatsModule { }
