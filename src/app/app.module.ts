import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerComponent } from './components/worker/worker.component';
import { ItemComponent } from './components/item/item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FactoryComponent } from './components/factory/factory.component';
import { TaskComponent } from './components/task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SingleWorkerPlaceComponent } from './components/single-worker-place/single-worker-place.component';
import { MultipleWorkerPlaceComponent } from './components/multiple-worker-place/multiple-worker-place.component';

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
