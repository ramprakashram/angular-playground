import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CountryDetailModel, CovidModel } from '../../../models/covid-model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCovidSummary(): Observable<CovidModel> {
    return this.http.get<CovidModel>('https://api.covid19api.com/summary')
  }

  getCountryCovidStatByStatus(countrySlug: string, status: string, startDate: string = '2020-03-01T00:00:00Z', endDate: string = '2020-04-01T00:00:00Z') {
    return this.http.get<Array<CountryDetailModel>>(`https://api.covid19api.com/country/${countrySlug}/status/${status}?from=${startDate}&to=${endDate}`)
  }
}
