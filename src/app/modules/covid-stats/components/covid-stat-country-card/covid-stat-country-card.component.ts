import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/models/covid-model';

@Component({
  selector: 'app-covid-stat-country-card',
  templateUrl: './covid-stat-country-card.component.html',
  styleUrls: ['./covid-stat-country-card.component.scss']
})
export class CovidStatCountryCardComponent implements OnInit {

  @Input() countryData: Country;
  @Output() pinnedStatusToggled = new EventEmitter<boolean>();

  constructor () { }

  ngOnInit(): void {
  }

  togglePinnedStatus(e): void {
    e.stopPropagation();
    this.pinnedStatusToggled.emit(!this.countryData.isPinned);
  }

}
