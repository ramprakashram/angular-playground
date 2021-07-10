import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Global } from 'src/app/models/covid-model';
import { covidGlobalStatSelector } from '../../../../core/store/covid-store/covid.selectors';

@Component({
  selector: 'app-covid-stat-header',
  templateUrl: './covid-stat-header.component.html',
  styleUrls: ['./covid-stat-header.component.scss']
})
export class CovidStatHeaderComponent implements OnInit {

  globalSummary$: Observable<Global> = this.store.pipe(select(covidGlobalStatSelector));

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
