import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3CircleChartPocV2Component } from './components/d3-circle-chart-poc-v2/d3-circle-chart-poc-v2.component';
import { D3CircleChartPocComponent } from './components/d3-circle-chart-poc/d3-circle-chart-poc.component';

const routes: Routes = [
  {
    path: 'circle',
    component: D3CircleChartPocV2Component
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'circle'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3PocRoutingModule { }
