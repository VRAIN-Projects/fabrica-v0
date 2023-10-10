import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-single-worker-place',
  templateUrl: './single-worker-place.component.html',
  styleUrls: ['./single-worker-place.component.css']
})
export class SingleWorkerPlaceComponent {

  @Input() color: string = 'black';

  @Output() workerMoved = new EventEmitter<string>();

  singleWorker: string[] = ['black'];
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      moveItemInArray(this.singleWorker, event.previousIndex, event.currentIndex);
    } else {
      // move between lists
     
    }
  }

  


}
