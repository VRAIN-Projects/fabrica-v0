import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { WorkersService } from 'src/app/services/workers.service';
import { Worker } from '../../models/worker.model';

@Component({
  selector: 'app-multiple-worker-place',
  templateUrl: './multiple-worker-place.component.html',
  styleUrls: ['./multiple-worker-place.component.css']
})
export class MultipleWorkerPlaceComponent {
  

  @Input() task: number = 0;

  workers : Worker[] = []; 

  constructor(private workerService : WorkersService) {
    
  }

  ngOnInit(){
    this.workers = this.workerService.getWorkersTask(this.task);
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      moveItemInArray(this.workers, event.previousIndex, event.currentIndex);
    } else {
      this.workerService.changeListFromSingleToMultiple(this.task);
      this.workers = this.workerService.getWorkersTask(this.task);
    }
  }
}
