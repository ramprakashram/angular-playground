import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Chart, registerables } from 'chart.js';
import { getRelativePosition } from 'chart.js/helpers';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bubble-chart-chartjs-chart',
  templateUrl: './bubble-chart-chartjs.component.html',
  styleUrls: ['./bubble-chart-chartjs.component.scss']
})
export class BubbleChartChartJSComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Bubble Chart - Chart.js');
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
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
        data: [
          {
            x: 1,
            y: 0.2,
            r: 12
          },
          {
            x: 1,
            y: 0.4,
            r: 8
          },
          {
            x: 1,
            y: 0.6,
            r: 4
          },
          {
            x: 1,
            y: 1.4,
            r: 12
          },
          {
            x: 1,
            y: 1.6,
            r: 8
          },
          {
            x: 1,
            y: 2.4,
            r: 16
          },
          {
            x: 2,
            y: 0.2,
            r: 16
          },
          {
            x: 2,
            y: 0.4,
            r: 12
          },
          {
            x: 2,
            y: 0.6,
            r: 10
          },
          {
            x: 2,
            y: 0.8,
            r: 4
          },
          {
            x: 2,
            y: 1.2,
            r: 14
          },
          {
            x: 2,
            y: 0.6,
            r: 10
          },
          {
            x: 3,
            y: 0.4,
            r: 8
          },
          {
            x: 3,
            y: 0.6,
            r: 6
          },
          {
            x: 3,
            y: 1.4,
            r: 10
          },
          {
            x: 3,
            y: 1.6,
            r: 8
          },
          {
            x: 3,
            y: 2.2,
            r: 16
          },
          {
            x: 3,
            y: 2.4,
            r: 12
          },
          {
            x: 4,
            y: 0.2,
            r: 12
          },
          {
            x: 4,
            y: 0.4,
            r: 8
          },
          {
            x: 4,
            y: 0.6,
            r: 4
          },
          {
            x: 4,
            y: 1.4,
            r: 12
          },
          {
            x: 4,
            y: 1.6,
            r: 8
          },
          {
            x: 4,
            y: 2.4,
            r: 16,
            backgroundColor: 'red'
          },
        ],
      }]
    };

    const chartDataWithBubbleColors = {
      datasets: [{
        backgroundColor: "green",
        title: "AI: Deepfakes",
        data: [{
          x: 1,
          y: 0.2,
          r: 12
        }]
      }, {
        backgroundColor: "purple",
        title: "AI: Economy",
        data: [{
          x: 1,
          y: 0.4,
          r: 8
        }]
      }, {
        backgroundColor: "pink",
        title: "AI: Jobs",
        data: [{
          x: 1,
          y: 0.6,
          r: 4
        }]
      },
      {
        backgroundColor: "purple",
        title: "Biometrics",
        data: [{
          x: 1,
          y: 1.4,
          r: 12
        }]
      },
      {
        backgroundColor: "green",
        title: "COVID-19 : Impact, Recovery and Prevention",
        data: [{
          x: 1,
          y: 1.6,
          r: 8
        }]
      },
      {
        backgroundColor: "pink",
        title: "Satellites",
        data: [{
          x: 1,
          y: 2.4,
          r: 16
        }]
      },
      {
        backgroundColor: "purple",
        title: "Darknet Materials",
        data: [{
          x: 2,
          y: 0.2,
          r: 16
        }]
      },
      {
        backgroundColor: "pink",
        title: "Big Tech",
        data: [{
          x: 2,
          y: 0.4,
          r: 12
        }]
      },
      {
        backgroundColor: "purple",
        title: "AI: Economy",
        data: [{
          x: 2,
          y: 0.6,
          r: 10
        }]
      },
      {
        backgroundColor: "pink",
        title: "AI: Jobs",
        data: [{
          x: 2,
          y: 0.8,
          r: 4
        }]
      },
      {
        backgroundColor: "purple",
        title: "Social Media",
        data: [{
          x: 2,
          y: 1.2,
          r: 14
        }]
      },
      {
        backgroundColor: "black",
        title: "dataTitle4",
        data: [{
          x: 2,
          y: 0.6,
          r: 10
        }]
      },
      {
        backgroundColor: "pink",
        title: "Digital Literature",
        data: [{
          x: 3,
          y: 0.4,
          r: 8
        }]
      },
      {
        backgroundColor: "pink",
        title: "COVID-19",
        data: [{
          x: 3,
          y: 0.6,
          r: 6
        }]
      },
      {
        backgroundColor: "blue",
        title: "AI: Deepfakes",
        data: [{
          x: 3,
          y: 1.4,
          r: 10
        }]
      },
      ]
    }

    const chartPlugins = [];


    const chartOptions = {
      responsive: true,
      plugins: {
        datalabels: {
          color: 'red',
          align: 'right',
          offset: 16,
          clamp: true,
          anchor: 'center',
          clip: true,
          display: 'auto',
          formatter: function (value, context) {
            const trucateTitlePivot = 15;
            const label = context.dataset.title.length < trucateTitlePivot ? context.dataset.title : context.dataset.title.substring(0, trucateTitlePivot) + '...'
            return label;
          }
        },
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        },
      },
      scales: {
        x: {
          suggestedMin: 0,
          max: 8,
          ticks: {
            stepSize: 1
          },
        },
        y: {
          suggestedMin: 0,
          suggestedMax: 3,
          ticks: {
            stepSize: 1
          }
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
      data: chartDataWithBubbleColors,
      options: chartOptions
    }

    const bubbleChart = new Chart(this.canvasEl, chartConfig);
  }

}
