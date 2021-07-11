import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setSelectedCountry, updateCountryPinnedStatus } from 'src/app/core/store/covid-store/covid.actions';
import { covidCountryListSelector } from 'src/app/core/store/covid-store/covid.selectors';
import { Country } from 'src/app/models/covid-model';

@Component({
  selector: 'app-covid-stat-country-summary',
  templateUrl: './covid-stat-country-summary.component.html',
  styleUrls: ['./covid-stat-country-summary.component.scss']
})
export class CovidStatCountrySummaryComponent implements OnInit {

  // countrySummary$: Observable<Array<Country>> = this.store.select(covidCountryListSelector)
  countrySummary: Array<Country>;
  searchCountry: string;

  constructor (private store: Store, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCountrySummary()
  }

  getCountrySummary() {
    this.store.select(covidCountryListSelector).subscribe((res) => {
      this.countrySummary = res;
    })
  }

  setSelectedCountry(countryData: Country) {
    this.store.dispatch(setSelectedCountry({ selectedCountry: countryData }));
    this.router.navigate([
      '../country-detail'
    ], {
      relativeTo: this.route
    })
  }

  pinnedStatusToggled(status: boolean, countryData: Country) {
    this.store.dispatch(updateCountryPinnedStatus({ status, countryId: countryData.ID }))
  }

}
