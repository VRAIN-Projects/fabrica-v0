import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-multiple-worker-place',
  templateUrl: './multiple-worker-place.component.html',
  styleUrls: ['./multiple-worker-place.component.css']
})
export class MultipleWorkerPlaceComponent {
  

  workers : string []= ['red', 'green', 'blue']; 
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      moveItemInArray(this.workers, event.previousIndex, event.currentIndex);
    } else {
      // move between lists
      this.workers.push('black');
    }
  }

  onWorkerMoved(worker: string) {
    throw new Error('Method not implemented.');
    this.workers.push(worker);
  }

  onItemDropped(event: CdkDragDrop<string[]>) {
    throw new Error('Method not implemented.');
  }
}
