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

  workers: string[] = ['black'];
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const worker = event.previousContainer.data[event.previousIndex];
      this.moveWorker(worker);
    }
  }

  moveWorker(worker: string) {
    worker = this.workers[0];
    this.workerMoved.emit(worker);
    this.workers = this.workers.filter(w => w !== worker);
  }

}
