import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BubbleChartsPocRoutingModule } from './bubble-charts-poc-routing.module';
import { BubbleChartsPocComponent } from './bubble-charts-poc.component';


@NgModule({
  declarations: [BubbleChartsPocComponent],
  imports: [
    CommonModule,
    BubbleChartsPocRoutingModule
  ]
})
export class BubbleChartsPocModule { }
