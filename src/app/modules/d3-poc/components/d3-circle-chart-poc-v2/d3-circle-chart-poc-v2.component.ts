import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-circle-chart-poc-v2',
  templateUrl: './d3-circle-chart-poc-v2.component.html',
  styleUrls: ['./d3-circle-chart-poc-v2.component.scss'],
})
export class D3CircleChartPocV2Component implements OnInit {
  constructor() {}

  nodes = [
    { Name: 'Exhibit & Records', Count: 7 },
    { Name: 'Exhibit & Records', Count: 7 },
    { Name: 'Exhibit & Records', Count: 7 },
    { Name: 'Exhibit & Records', Count: 7 },
    { Name: 'Exhibit & Records', Count: 7 },
    { Name: 'Management Infrastructure', Count: 4 },
    { Name: 'Audit, Statistics & performance', Count: 3 },
    { Name: 'Operations & Support', Count: 3 },
    { Name: 'Change Analysis', Count: 2 },
    { Name: 'People Strategies', Count: 2 },
    { Name: 'Learning & Development Command', Count: 1 },
    { Name: 'Strategy, Policy & Co-ordination', Count: 2 },
    { Name: 'Performance & Innovation', Count: 1 },
    { Name: 'Policy & Change', Count: 1 },
    { Name: 'Artificial Intelligence', Count: 1 },
    { Name: 'Digital Investment & Governance', Count: 1 },
    { Name: 'Infrastructure & Logistics', Count: 1 },
    { Name: 'Business Plan 2020', Count: 1 },
    { Name: 'Strategic Alliance', Count: 1 },
    { Name: 'Strategic Governance', Count: 1 },
    { Name: 'Operation & Strategy', Count: 1 },
    { Name: 'Human Resource', Count: 1 },
    { Name: 'Perfomance Management', Count: 1 },
  ];
  svgElId = 'svg-placeholder';
  width: number; // Width of the SVG Element. This will be calculated after getting the rScale values.
  height = 300; // Height of the SVG Element
  margin = 30; // Margin you need for the content inside the rendered SVG (OPTIONAL)
  maxRadius = 80; //Maximum radius of the circle generated, this will be in relative to the Count value
  color: any; // This is for POC purpose only, we can remove it later.
  yScale: any;
  rScale: any;
  forceStrength = 0.051;
  cxOffset = 10;
  cxCumulative = 0;

  ngOnInit(): void {
    this.nodes = this.nodes.sort((a,b) =>b.Count - a.Count)
    this.createD3Scales();
  }

  createD3Scales(): void {
    // Get the minimum and maximum value from the array.
    // d3.extent() will return like [MIN_VALUE, MAXVALUE] format.
    var extentCount: Array<number> = d3.extent(this.nodes, (d) => d.Count);
    extentCount =
      extentCount[0] === extentCount[1]
        ? (extentCount = [1, extentCount[1]])
        : extentCount;

    // Using D3's Linear Scale to get the co-ordinates for Y-Axis.
    // Refer here for more details : https://observablehq.com/@d3/d3-scalelinear
    // Refer here for more details : https://github.com/d3/d3-scale#linear-scales
    // I AM PRETTY SURE THE ABOVE DOCUMENTATION WILL MAKE YOU DIZZY JUST LIKE IT DID FOR ME :)
    this.yScale = d3
      .scaleLinear()
      .domain(extentCount)
      .range([this.height - this.maxRadius, this.maxRadius]);

    // Using D3's Squareroot Scale to get the radius of the circle relative to the given maxRadius
    // Refer here for more details: https://github.com/d3/d3-scale#scaleSqrt
    this.rScale = d3
      .scaleSqrt()
      .domain(extentCount)
      .range([10, this.maxRadius]);

    // This will calculate the Sum of all circle by using the radius generated from rScale function
    // This will be used to set the size of SVG Element.
    this.width = Math.ceil(d3.sum(this.nodes, (d) => this.rScale(d.Count) * 2));

    this.updateNodesObjectWithCXValue();
    this.sortNodesObjectByDescendingOrder();

    // FOR POC-PURPOSE ONLY, you can remove it later
    // this.color = d3.scaleOrdinal(d3.schemeCategory20);

    this.initCircleChart();
  }

  // Update the nodes object with custom cx value, instead of d3's scale.
  // Feel free to update this with d3 scale or improve the scale accuracy
  updateNodesObjectWithCXValue(): void {
    this.nodes = this.nodes.map((eachCircleItem) => {
      var currentCX = this.cxCumulative + this.rScale(eachCircleItem.Count);
      this.cxCumulative += this.rScale(eachCircleItem.Count) * 2;
      return {
        ...eachCircleItem,
        cx: currentCX,
      };
    });
  }

  sortNodesObjectByDescendingOrder(): void {
    this.nodes = this.nodes.sort((a, b) => b.Count - a.Count);
  }

  initCircleChart(): void {
    const svg = d3
      .select('#' + this.svgElId)
      .append('svg')
      .attr('width', this.width + this.margin + this.margin)
      .attr('height', this.height + this.margin + this.margin)
      .attr('class', 'bubble');

    const circleWrapperEl = svg
      .append('g')
      .attr('transform', `translate(${this.margin},${this.margin})`);

    // Using D3's Force Layout to detect the collision and move the circle accordingly
    const simulation = d3
      .forceSimulation(this.nodes)
      .force(
        'forceX',
        d3
          .forceX()
          .strength(this.forceStrength)
          .x((d) => d.cx)
      )
      .force(
        'forceY',
        d3
          .forceY()
          .strength(this.forceStrength)
          .y((d) => this.yScale(d.Count))
      )
      .force(
        'collision',
        d3.forceCollide().radius((d) => this.rScale(d.Count) + 3)
      )
      .on('tick', function (d) {
        console.log(d);
        node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
      })
      .stop();

    for (var i = 0; i < 120; i++) {
      simulation.tick();
    }

    // Start appending the <g> element into the svg element, which will act as the container for circle, text, tooltips
    // Positioning of the element will happen at this level.
    const node = circleWrapperEl
      .selectAll('.node')
      .data(this.nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.x},${d.y})`);

    // Tooltip
    node.append('title').text((d) => `${d.Name} : ${d.Count}`);


    // Creating circle with radius from rScale
    node
      .append('circle')
      .attr('r', (d) => this.rScale(d.Count))
      .style('fill', 'red');

    // node
    //   .append('text')
    //   .attr('dy', function (d) {
    //     const dy =
    //       this.rScale(d.Count) > d.y ? d.y + 10 : d.y - this.rScale(d.Count);
    //     return dy;
    //   })
    //   .style('text-anchor', 'middle')
    //   .text(function (d) {
    //     return d.Name.substring(0, this.rScale(d.Count) / 3);
    //   })
    //   .attr('font-family', 'sans-serif')
    //   .attr('font-size', function (d) {
    //     return this.rScale(d.Count) / 5;
    //   })
    //   .attr('fill', 'black');

    // Create text element for displaying the Count from nodes object
    node
      .append('text')
      .attr('dy', '.2em')
      .style('text-anchor', 'middle')
      .text((d) => d.Count)
      .attr('font-size', (d) => d.r / 4)
      .attr('fill', 'white');
  }
}
