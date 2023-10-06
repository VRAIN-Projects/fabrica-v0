import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';

interface Worker {
  name: string;
}

@Component({
  selector: 'app-worker-place',
  templateUrl: './worker-place.component.html',
  styleUrls: ['./worker-place.component.css']
})
export class WorkerPlaceComponent {
  workers: Worker[] = [
    { name: 'Worker 1' },  
  ];

  onDrop(event: CdkDragDrop<Worker[]>) {
    //hide the worker
    const icon = document.getElementById("icon");

    if (icon) {
      icon.classList.add("hide");    
    }

    const sourceIndex = event.previousIndex;
    const targetIndex = event.currentIndex;
    const worker = this.workers[sourceIndex];
    this.workers.splice(sourceIndex, 1);
    this.workers.splice(targetIndex, 0, worker);
  }

  onDrag(event: CdkDragDrop<Worker>) {
    //show the worker


  }
  onDragStarted(event: CdkDrag) {
    const icon = document.getElementById("icon");

    if (icon) {
      icon.classList.remove("hide");    
    }
  }


}
