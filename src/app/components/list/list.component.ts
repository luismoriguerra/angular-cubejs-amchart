import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CubejsClient } from '@cubejs-client/ngx';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  projects: any[] = [];
  selectedProject: any = '2';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    const data = await this.projectService.getProjectChildren();

    this.projects = data;
  }
}
