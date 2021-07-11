import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { selectUserSelectedCountry } from 'src/app/core/store/covid-store/covid.selectors';
import { Country, CountryDetailModel } from 'src/app/models/covid-model';
import { CovidService } from '../../services/covid.service';

@Component({
  selector: 'app-covid-country-detail-view',
  templateUrl: './covid-country-detail-view.component.html',
  styleUrls: ['./covid-country-detail-view.component.scss']
})
export class CovidCountryDetailViewComponent implements OnInit {

  selectedCountry: Country;
  covidCaseStat$;


  constructor(private store: Store, private covidService: CovidService) { }

  ngOnInit(): void {
    this.getCountryDetails();
  }

  getCountryDetails() {
    this.store.select(selectUserSelectedCountry)
      .subscribe((res) => {
        if (res) {
          this.selectedCountry = res;
          this.getAllStatusFromServer()
        }
      })
  }

  getAllStatusFromServer() {
    console.log('inside')
    this.covidCaseStat$ = forkJoin({
      confirmed: this.getCountryDataFromServer('confirmed'),
      recovered: this.getCountryDataFromServer('recovered'),
      deaths: this.getCountryDataFromServer('deaths'),
    });
  }

  getCountryDataFromServer(status: string) {
    return this.covidService.getCountryCovidStatByStatus(this.selectedCountry.Slug, status)
  }

}
