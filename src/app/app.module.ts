import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumanComponent } from './components/home/human/human.component';
import { HumansComponent } from './components/home/humans/humans.component';
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
import { RobotsComponent } from './components/home/robots/robots.component';
import { ScrollBarComponent } from './components/home/scroll-bar/scroll-bar.component';
import { RobotComponent } from './components/home/robot/robot.component';

@NgModule({
  declarations: [
    AppComponent,
    HumansComponent,
    HumanComponent,
    FactoryComponent,
    SingleWorkerPlaceComponent,
    MultipleWorkerPlaceComponent,
    SkillsComponent,
    ActionComponent,
    NavbarComponent,
    StatisticsComponent,
    HomeComponent,
    ConnectorComponent,
    RobotsComponent,
    ScrollBarComponent,
    RobotComponent,
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
