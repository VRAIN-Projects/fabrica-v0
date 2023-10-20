import { Component, Input, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { WorkersService } from 'src/app/services/workers.service';
import { Worker } from '../../../models/worker.model';

@Component({
  selector: 'app-multiple-worker-place',
  templateUrl: './multiple-worker-place.component.html',
  styleUrls: ['./multiple-worker-place.component.css']
})
export class MultipleWorkerPlaceComponent {
  

  @Input() numberAction: number = 0;

  workers : Worker[] = []; 

  constructor(private workerService : WorkersService) {
    
  }

  ngOnInit(){
    this.workers = this.workerService.getWorkersTask(this.numberAction);

    this.workerService.workerTaskChanged.subscribe(() => {
      this.workers = this.workerService.getWorkersTask(this.numberAction);
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

      if(changingWorker.action > 0) {
        this.workerService.changeListFromMultipleToMultiple(this.numberAction);
      } else {
        this.workerService.changeListFromSingleToMultiple(this.numberAction);
      }

      this.workers = this.workerService.getWorkersTask(this.numberAction);
    }
  }

  selectWorker(worker : Worker) {
    this.workerService.setChangingWorker(worker);
    //Print the worker
    console.log(worker);
  }
}
