import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { CountryDetailModel } from 'src/app/models/covid-model';

@Component({
  selector: 'app-covid-country-status-line-chart',
  templateUrl: './covid-country-status-line-chart.component.html',
  styleUrls: ['./covid-country-status-line-chart.component.scss']
})
export class CovidCountryStatusLineChartComponent implements OnInit {

  @Input() chartTitle: string;
  @Input() covidCaseStat: Array<CountryDetailModel>;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  status: string = 'Confirmed';
  parsedChartObj: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.parseData()
  }

  parseData() {
    if (this.covidCaseStat) {
      this.parsedChartObj = this.covidCaseStat.map((e) => {
        return [`${new Date(e.Date)}`, e.Cases]
      })
      this.setChartOptions();
    }
  }

  setChartOptions() {
    this.chartOptions = {
      title: {
        text: this.chartTitle
      },
      xAxis: {
        type: 'datetime',
        // dateTimeLabelFormats: { // don't display the dummy year
        //   month: '%b %e, %Y'
        // },
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        title: {
          text: `${status} cases`
        },
        min: 0
      },
      plotOptions: {
        series: {
          marker: {
            enabled: true
          }
        }
      },
      series: [
        {
          type: "line",
          data: this.parsedChartObj
        }
      ]
    };
  }

}
