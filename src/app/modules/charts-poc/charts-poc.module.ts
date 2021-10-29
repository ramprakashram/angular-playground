import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsPocRoutingModule } from './charts-poc-routing.module';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';


@NgModule({
  declarations: [
    BubbleChartComponent
  ],
  imports: [
    CommonModule,
    ChartsPocRoutingModule
  ]
})
export class ChartsPocModule { }
