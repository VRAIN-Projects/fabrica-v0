import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Worker } from '../../models/worker.model';


@Component({
  selector: 'app-single-worker-place',
  templateUrl: './single-worker-place.component.html',
  styleUrls: ['./single-worker-place.component.css']
})
export class SingleWorkerPlaceComponent {

  @Input() worker: Worker = new Worker();

  singleWorker: Worker[] = [];

  constructor() {

  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      moveItemInArray(this.singleWorker, event.previousIndex, event.currentIndex);
    } else {
      // move between lists
     
    }
  }

  


}
