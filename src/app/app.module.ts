import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerComponent } from './worker/worker.component';
import { ItemComponent } from './item/item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FactoryComponent } from './factory/factory.component';
import { TaskComponent } from './task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SingleWorkerPlaceComponent } from './single-worker-place/single-worker-place.component';
import { MultipleWorkerPlaceComponent } from './multiple-worker-place/multiple-worker-place.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerComponent,
    ItemComponent,
    SidebarComponent,
    FactoryComponent,
    TaskComponent,
    SingleWorkerPlaceComponent,
    MultipleWorkerPlaceComponent
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
