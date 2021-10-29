import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { getRelativePosition } from 'chart.js/helpers';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
  }

  private canvasEl: any;

  ngOnInit(): void {
    this.initBubbleChart();
  }

  initBubbleChart(): void {
    this.canvasEl = document.getElementById('bubble-chart');

    const chartType = 'bubble';
    const chartData = {
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 1,
          y: 8,
          r: 15
        },
        {
          x: 1,
          y: 7,
          r: 10
        },
        {
          x: 1,
          y: 6,
          r: 10
        },
        {
          x: 1,
          y: 5,
          r: 10
        },
        {
          x: 1,
          y: 4,
          r: 10
        },
        {
          x: 1,
          y: 4,
          r: 10
        },
        {
          x: 1,
          y: 4,
          r: 10
        },
      ],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };
    const chartOptions = {
      scales: {
          x: {
            suggestedMin: 0,
            suggestedMax: 15,
            ticks: {
              stepSize: 1
            },
          },
          y: {
            suggestedMin: 0,
            suggestedMax: 15
          }
      },
      onClick: (e) => {
        const canvasPosition = getRelativePosition(e, bubbleChart);
            // Substitute the appropriate scale IDs
            const dataX = bubbleChart.scales.x.getValueForPixel(canvasPosition.x);
            const dataY = bubbleChart.scales.y.getValueForPixel(canvasPosition.y);
            console.log(dataX, dataY);
      }
  }

    const chartConfig: any = {
      type: chartType,
      data: chartData,
      options: chartOptions
    }

    const bubbleChart = new Chart(this.canvasEl, chartConfig);
  }

}
