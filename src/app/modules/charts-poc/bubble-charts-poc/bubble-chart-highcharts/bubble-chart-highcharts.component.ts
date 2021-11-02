import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bubble-chart-highcharts',
  templateUrl: './bubble-chart-highcharts.component.html',
  styleUrls: ['./bubble-chart-highcharts.component.scss']
})
export class BubbleChartHighchartsComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Bubble Chart - Highcharts');
  }

  ngOnInit(): void {
  }

}
