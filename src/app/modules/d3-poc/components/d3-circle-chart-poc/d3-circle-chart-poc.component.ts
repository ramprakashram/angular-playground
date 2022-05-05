import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-circle-chart-poc',
  templateUrl: './d3-circle-chart-poc.component.html',
  styleUrls: ['./d3-circle-chart-poc.component.scss'],
})
export class D3CircleChartPocComponent implements OnInit {
  constructor() {}

  cxOffset = 10;
  cxCumulative = 0;
  circleData = [
    {
      radius: 100,
      name: 'Data 1',
    },
    {
      radius: 80,
      name: 'Data 2',
    },
    {
      radius: 50,
      name: 'Data 3',
    },
    {
      radius: 90,
      name: 'Data 4',
    },
  ];

  ngOnInit(): void {
    this.initD3JS();
  }

  initD3JS(): void {
    const svgEl = d3.select('#circleChart');
    svgEl.style('border', '1px solid')
   
    // const minValue = d3.min(this.circleData, (d) => d.radius);
    // const maxValue = d3.max(this.circleData, (d) => d.radius);
    // const totalValue = d3.sum(this.circleData, (d) => d.radius);
    // const cxScale = d3.scaleLinear()
    //   .domain([minValue, maxValue])
    //   .range([minValue, 1000 - maxValue])
    // this.circleData.forEach((eachData) => {
    //   console.log(eachData.radius + ' : ' + cxScale(eachData.radius));
    // })
   
    this.circleData = this.circleData.map((eachCircleItem) => {
      var currentCX = this.cxCumulative + eachCircleItem.radius + this.cxOffset;
      this.cxCumulative += eachCircleItem.radius * 2 + this.cxOffset;
      return {
        ...eachCircleItem,
        cx: currentCX,
      };
    });
   
    const dataEl = svgEl.selectAll('g').data(this.circleData);
    // const enterEl = dataEl.enter().append('g');
    const enterEl = dataEl.join('g');

    const circles = enterEl
      .append('circle')
      .attr('cx', 0)
      .attr('cy', 100)
      .attr('r', (d) => d.radius)
      .style('fill', 'blue')
      .transition()
      .duration(1000)
      .delay(function (d, i) {
        return i * 50;
      })
      .on('start', function repeat() {
        d3.active(this)
          .attr('cx', (d) => d.cx)
          .transition();
      });

    const circleTexts = enterEl
      .append('text')
      .style('opacity', 0)
      .style('fill', 'white')
      .attr('dy', 100)
      .attr('dx', (d) => d.cx)
      .text((d) => d.name)
      .attr('text-anchor', 'middle')
      .transition()
      .duration(1000)
      .delay(function (d, i) {
        return i * 50;
      })
      .style('opacity', 1)
  }
}
