import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { covidCountryListSelector } from 'src/app/core/store/covid-store/covid.selectors';
import { Country } from 'src/app/models/covid-model';

@Component({
  selector: 'app-covid-stat-country-summary',
  templateUrl: './covid-stat-country-summary.component.html',
  styleUrls: ['./covid-stat-country-summary.component.scss']
})
export class CovidStatCountrySummaryComponent implements OnInit {

  countrySummary$: Observable<Array<Country>> = this.store.pipe(select(covidCountryListSelector))

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
