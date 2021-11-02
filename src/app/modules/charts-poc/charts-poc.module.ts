import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsPocRoutingModule } from './charts-poc-routing.module';
import { BubbleChartChartJSComponent } from './bubble-charts-poc/bubble-chart-chartjs/bubble-chart-chartjs.component';
import { BubbleChartHighchartsComponent } from './bubble-charts-poc/bubble-chart-highcharts/bubble-chart-highcharts.component';


@NgModule({
  declarations: [
    BubbleChartChartJSComponent,
    BubbleChartHighchartsComponent
  ],
  imports: [
    CommonModule,
    ChartsPocRoutingModule
  ]
})
export class ChartsPocModule { }
