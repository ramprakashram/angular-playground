import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Chart, registerables } from 'chart.js';
import { getRelativePosition } from 'chart.js/helpers';

@Component({
  selector: 'app-bubble-chart-chartjs-chart',
  templateUrl: './bubble-chart-chartjs.component.html',
  styleUrls: ['./bubble-chart-chartjs.component.scss']
})
export class BubbleChartChartJSComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Bubble Chart - Chart.js');
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
      labels: "Threats",
      datasets: [{
        label: ["Threat1"],
        backgroundColor: "red",
        title: "dataTitle1",
        data: [{
          x: 1,
          y: 0.2,
          r: 12
        }]
      }, {
        label: ["Threat2"],
        backgroundColor: "yellow",
        title: "dataTitle2",
        data: [{
          x: 1,
          y: 0.4,
          r: 8
        }]
      }, {
        label: ["Threat3"],
        backgroundColor: "blue",
        title: "dataTitle3",
        data: [{
          x: 1,
          y: 0.6,
          r: 4
        }]
      }, 
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 1,
          y: 1.4,
          r: 12
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 1,
          y: 1.6,
          r: 8
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 1,
          y: 2.4,
          r: 16
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 2,
          y: 0.2,
          r: 16
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 2,
          y: 0.4,
          r: 12
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 2,
          y: 0.6,
          r: 10
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 2,
          y: 0.8,
          r: 4
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 2,
          y: 1.2,
          r: 14
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 2,
          y: 0.6,
          r: 10
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 3,
          y: 0.4,
          r: 8
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 3,
          y: 0.6,
          r: 6
        }]
      },
      {
        label: ["Threat4"],
        backgroundColor: "black",
        borderColor: "",
        title: "dataTitle4",
        data: [{
          x: 3,
          y: 1.4,
          r: 10
        }]
      },
    ]
    }

    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
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
