import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setSelectedCountry, updateCountryPinnedStatus } from 'src/app/core/store/covid-store/covid.actions';
import { selectUserPinnedCountries } from 'src/app/core/store/covid-store/covid.selectors';
import { Country } from 'src/app/models/covid-model';

@Component({
  selector: 'app-covid-stat-pinned-countries',
  templateUrl: './covid-stat-pinned-countries.component.html',
  styleUrls: ['./covid-stat-pinned-countries.component.scss']
})
export class CovidStatPinnedCountriesComponent implements OnInit {

  pinnedCountries$: Observable<Array<Country>> = this.store.select(selectUserPinnedCountries);

  customRightPosition: string = '-400px';
  // left: 73%;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toggleSidePanel() {
    this.customRightPosition = this.customRightPosition === '-400px' ? '0' : '-400px';
  }

  setSelectedCountry(countryData: Country) {
    this.store.dispatch(setSelectedCountry({ selectedCountry: countryData }));
    this.router.navigate([
      'country-detail'
    ], {
      relativeTo: this.route
    })
  }

  pinnedStatusToggled(status: boolean, countryData: Country) {
    this.store.dispatch(updateCountryPinnedStatus({ status, countryId: countryData.ID }))
  }

}
