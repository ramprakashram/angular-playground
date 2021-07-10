import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidStatsRoutingModule } from './covid-stats-routing.module';
import { CovidStatsComponent } from './covid-stats.component';
import { CovidStatHeaderComponent } from './components/covid-stat-header/covid-stat-header.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidStatCountrySummaryComponent } from './components/covid-stat-country-summary/covid-stat-country-summary.component';
import { CovidStatCountryCardComponent } from './components/covid-stat-country-card/covid-stat-country-card.component';
import { FilterCountryPipe } from './pipes/filter-country.pipe';
import { FormsModule } from '@angular/forms';
import { CovidCountryDetailViewComponent } from './components/covid-country-detail-view/covid-country-detail-view.component';


@NgModule({
  declarations: [CovidStatsComponent, CovidStatHeaderComponent, CovidStatCountrySummaryComponent, CovidStatCountryCardComponent, FilterCountryPipe, CovidCountryDetailViewComponent],
  imports: [
    CommonModule,
    CovidStatsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CovidStatsModule { }
