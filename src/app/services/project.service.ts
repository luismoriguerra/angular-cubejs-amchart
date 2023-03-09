import { Injectable } from '@angular/core';
import { CubejsClient } from '@cubejs-client/ngx';
import { firstValueFrom } from 'rxjs';

interface CubeProject {
  'Project.projectid': number;
  'Project.name': string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private cubejs: CubejsClient) {}

  async getProjectChildren(
    { projectId = '6' } = {} as any
  ): Promise<CubeProject[]> {
    const query: any = {
      dimensions: ['Project.projectid', 'Project.name'],
      order: {
        'Project.projectid': 'asc',
      },
      filters: [
        {
          member: 'Project.parent_project_id',
          operator: 'equals',
          values: [projectId],
        },
      ],
    };

    const source$ = this.cubejs.load(query);
    const resultSet = await firstValueFrom(source$);
    const tablePivot: any = resultSet.tablePivot();
    return tablePivot;
  }
}
