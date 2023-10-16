import { Component, Input, SimpleChanges } from '@angular/core';
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

    this.workerService.workerTaskChanged.subscribe(() => {
      this.workers = this.workerService.getWorkersTask(this.task);
    });
  }
  
  drop(event: CdkDragDrop<string[]>) {

    let changingWorker = null;

    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      moveItemInArray(this.workers, event.previousIndex, event.currentIndex);
    } else {
      changingWorker = this.workerService.getChangingWorker();
      //if(changingWorker.getChangingWorker() != 0) {

      if(changingWorker.task > 0) {
        this.workerService.changeListFromMultipleToMultiple(this.task);
      } else {
        this.workerService.changeListFromSingleToMultiple(this.task);
      }

      this.workers = this.workerService.getWorkersTask(this.task);
    }
  }

  selectWorker(worker : Worker) {
    this.workerService.setChangingWorker(worker);
    //Print the worker
    console.log(worker);
  }
}
