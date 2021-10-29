import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

const routes: Routes = [
  {
    path: 'bubble',
    component: BubbleChartComponent
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
