import { Component } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  option: any;
  chartDom: any;
  myChart: any;

  constructor() { 
  }
  ngOnInit(): void {
    this.option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };

    this.chartDom = document.getElementById('main');
    this.myChart = echarts.init(this.chartDom);
  }    
}