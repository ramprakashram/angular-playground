import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserSelectedCountry } from 'src/app/core/store/covid-store/covid.selectors';
import { Country } from 'src/app/models/covid-model';
import { CovidService } from '../../services/covid.service';

@Component({
  selector: 'app-covid-country-detail-view',
  templateUrl: './covid-country-detail-view.component.html',
  styleUrls: ['./covid-country-detail-view.component.scss']
})
export class CovidCountryDetailViewComponent implements OnInit {

  selectedCountry: Country;

  constructor(private store: Store, private covidService: CovidService) { }

  ngOnInit(): void {
    this.getCountryDetails();
  }

  getCountryDetails() {
    this.store.select(selectUserSelectedCountry)
      .subscribe((res) => {
        console.log(res);
        if (res) {
          this.selectedCountry = res;
          this.getCountryDataFromServer('confirmed');
        }
      })
  }

  getCountryDataFromServer(status: string) {
    this.covidService.getCountryCovidStatByStatus(this.selectedCountry.Slug, status)
      .subscribe((res) => {
        console.log(res);
      })
  }

}
