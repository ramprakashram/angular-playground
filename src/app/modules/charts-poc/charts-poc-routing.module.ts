import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleChartChartJSComponent } from './bubble-charts-poc/bubble-chart-chartjs/bubble-chart-chartjs.component';

const routes: Routes = [
  {
    path: 'bubble',
    loadChildren: () => import('./bubble-charts-poc/bubble-charts-poc.module').then((m) => m.BubbleChartsPocModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bubble'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsPocRoutingModule { }
