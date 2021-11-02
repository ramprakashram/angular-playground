import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleChartChartJSComponent } from './bubble-chart-chartjs/bubble-chart-chartjs.component';
import { BubbleChartHighchartsComponent } from './bubble-chart-highcharts/bubble-chart-highcharts.component';
import { BubbleChartsPocComponent } from './bubble-charts-poc.component';

const routes: Routes = [
  {
    path: '',
    component: BubbleChartsPocComponent,
    children: [
      {
        path: 'chart-js',
        component: BubbleChartChartJSComponent
      },
      {
        path: 'highcharts',
        component: BubbleChartHighchartsComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chart-js'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BubbleChartsPocRoutingModule { }
