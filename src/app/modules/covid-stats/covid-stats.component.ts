import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCovidData, setCovidStats } from 'src/app/core/store/covid-store/covid.actions';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-covid-stats',
  templateUrl: './covid-stats.component.html',
  styleUrls: ['./covid-stats.component.scss']
})
export class CovidStatsComponent implements OnInit {

  constructor (private covidService: CovidService, private store: Store) { }

  ngOnInit(): void {
    // this.getCovidStats();
    this.store.dispatch(getCovidData())
  }

  // getCovidStats() {
  //   this.covidService.getCovidSummary()
  //     .subscribe((covidStat) => {
  //       this.store.dispatch(setCovidStats({ covidStatSummary: covidStat }))
  //     })
  // }

}
