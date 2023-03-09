import { Component, OnInit } from '@angular/core';

import { getLineChart } from './line';
import { CommitService } from 'src/app/services/commit.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor(private commitService: CommitService) {}

  ngOnInit(): void {
    this.getChartData();
  }

  async getChartData() {
    const series = await this.commitService.getCommitSeries();
    console.log('> data', series);

    getLineChart({
      data: series.data.map((e) => ({
        x: new Date(e.x).getTime(),
        value: e.value,
      })) as any,
      xAxisFieldName: 'x',
      yAxisFieldName: 'value',
    });
  }

  // ngAfterViewInit() {
  //   getLineChart();
  // }
}
