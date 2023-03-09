import { formatDate } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CubejsClient } from '@cubejs-client/ngx';
import { CommitService } from './services/commit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angularv10';
  commitTotal: any;
  diffValue: any;
  constructor(private commitService: CommitService) {}

  ngOnInit() {
    this.getCommitTotal();
  }

  async getCommitTotal() {
    const data = await this.commitService.getCommitTotal({});
    // console.log('> data', data);

    this.commitTotal = data;
  }
}
