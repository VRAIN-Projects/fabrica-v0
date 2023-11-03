import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit{
  options: EChartsOption | null = null;
  constructor() {}

  ngOnInit(): void {
    this.options = {
      xAxis: {
        max: 'dataMax'
      },
      grid: {
        width: '80%',
        height: '40%',
        left: '10%',
        top: '5%'
      },
      yAxis: {
        type: 'category',
        data: ['Money Used', 'Quantity', 'Quality'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        axisLabel: {
          rotate: 70
        },
        max: 2 // only the largest 3 bars will be displayed
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };
  }
}