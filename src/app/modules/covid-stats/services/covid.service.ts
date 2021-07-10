import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CovidModel } from '../../../models/covid-model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor (private http: HttpClient) { }

  getCovidSummary(): Observable<CovidModel> {
    return this.http.get<CovidModel>('https://api.covid19api.com/summary')
  }
}
