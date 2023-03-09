import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CubejsClientModule } from '@cubejs-client/ngx';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ChartComponent } from './components/chart/chart.component';
import { EntityDescriptionComponent } from './components/entity-description/entity-description.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const API_URL = 'https://flaky-sheep.gcp-us-central1.cubecloudapp.dev';
// const cubejsOptions = {
//   token:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1Ijp7fSwiaWF0IjoxNjAzNzMzMDA2fQ.zZ6C1OqWFuF0od3eb_M6Fqzeb7a8g4JXYepIes3CLos',
//   options: { apiUrl: `${API_URL}/cubejs-api/v1` },
// };

const cubejsOptions = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzgyODc3MzYsImV4cCI6MTY3ODM3NDEzNn0.fig3eerzaTDb_7sq-yCxPrsVC5bNjEIXOclW2axIN00',
  options: {
    apiUrl: 'http://localhost:4000/cubejs-api/v1',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ChartComponent,
    EntityDescriptionComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    CubejsClientModule.forRoot(cubejsOptions),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
