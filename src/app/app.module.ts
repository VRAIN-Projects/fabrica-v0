import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerComponent } from './components/home/worker/worker.component';
import { ItemComponent } from './components/home/item/item.component';
import { WorkersComponent } from './components/home/workers/workers.component';
import { FactoryComponent } from './components/home/factory/factory.component';
import { ActionComponent } from './components/home/action/action.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SingleWorkerPlaceComponent } from './components/home/single-worker-place/single-worker-place.component';
import { MultipleWorkerPlaceComponent } from './components/home/multiple-worker-place/multiple-worker-place.component';
import { StatisticsComponent } from './components/home/statistics/statistics.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { ConnectorComponent } from './components/home/connector/connector.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    WorkerComponent,
    ItemComponent,
    FactoryComponent,
    SingleWorkerPlaceComponent,
    MultipleWorkerPlaceComponent,
    SkillsComponent,
    ActionComponent,
    NavbarComponent,
    StatisticsComponent,
    HomeComponent,
    ConnectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
