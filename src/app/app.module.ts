import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerComponent } from './components/worker/worker.component';
import { ItemComponent } from './components/item/item.component';
import { WorkersComponent } from './components/workers/workers.component';
import { FactoryComponent } from './components/factory/factory.component';
import { ActionComponent } from './components/action/action.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SingleWorkerPlaceComponent } from './components/single-worker-place/single-worker-place.component';
import { MultipleWorkerPlaceComponent } from './components/multiple-worker-place/multiple-worker-place.component';
import { SkillsActionComponent } from './components/skills-action/skills-action.component';
import { SkillsWorkerComponent } from './components/skills-worker/skills-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    WorkerComponent,
    ItemComponent,
    FactoryComponent,
    SingleWorkerPlaceComponent,
    MultipleWorkerPlaceComponent,
    SkillsActionComponent,
    SkillsWorkerComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
