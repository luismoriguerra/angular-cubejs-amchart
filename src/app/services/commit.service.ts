import { Injectable } from '@angular/core';
import { CubejsClient } from '@cubejs-client/ngx';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommitService {
  constructor(private cubejs: CubejsClient) {}

  async getCommitSeries() {
    const query: any = {
      measures: ['Commit.count'],
      timeDimensions: [
        {
          dimension: 'Commit.createdat',
          granularity: 'day',
          dateRange: 'Last Month',
        },
      ],
      order: {
        'Commit.createdat': 'asc',
      },
    };

    const resultSet = await firstValueFrom(this.cubejs.load(query));

    return {
      series: resultSet.series()[0],
      data: resultSet.series()[0].series,
      // seriesNames: resultSet.seriesNames(),
    };
  }

  async getCommitTotal({
    projectId = '6',
    repositoryId = '',
    dateFilter = '',
  }) {
    const query: any = {
      measures: ['Commit.count'],
      timeDimensions: [
        {
          dimension: 'Commit.createdat',
        },
      ],
    };

    const resultSet = await firstValueFrom(this.cubejs.load(query));

    // console.log('> resultSet', resultSet);

    const numericValues = resultSet
      .seriesNames()
      .map((s) => resultSet.totalRow()[s.key]);

    return numericValues[0];
  }
}
