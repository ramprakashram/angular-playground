import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D3PocRoutingModule } from './d3-poc-routing.module';
import { D3CircleChartPocComponent } from './components/d3-circle-chart-poc/d3-circle-chart-poc.component';
import { D3CircleChartPocV2Component } from './components/d3-circle-chart-poc-v2/d3-circle-chart-poc-v2.component';


@NgModule({
  declarations: [D3CircleChartPocComponent, D3CircleChartPocV2Component],
  imports: [
    CommonModule,
    D3PocRoutingModule
  ]
})
export class D3PocModule { }
