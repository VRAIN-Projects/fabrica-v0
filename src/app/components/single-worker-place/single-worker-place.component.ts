import { Component, Input } from '@angular/core';
import { CdkDragDrop, CdkDragEnter, moveItemInArray} from '@angular/cdk/drag-drop';
import { Worker } from '../../models/worker.model';
import { WorkersService } from 'src/app/services/workers.service';


@Component({
  selector: 'app-single-worker-place',
  templateUrl: './single-worker-place.component.html',
  styleUrls: ['./single-worker-place.component.css']
})
export class SingleWorkerPlaceComponent {

  @Input() worker: Worker = new Worker();

  singleWorker: Worker[] = [];

  constructor(private workerService: WorkersService) {
    
  }

  ngOnInit() {
    this.singleWorker.push(this.worker);
  }
  

  selectWorker() {
    this.workerService.setChangingWorker(this.worker);
  }

  drop(event: CdkDragDrop<Worker[]>) {
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      moveItemInArray(this.singleWorker, event.previousIndex, event.currentIndex);
    } else {
      this.workerService.changeListFromMultipleToSingle();
    }
  }

  hideVoidWorker(event: CdkDragEnter){
    //get the voidworker
    let voidWorker = event.container.element.nativeElement.querySelector('.void-worker');

    //hide all the void workers
    if (voidWorker) {
      (voidWorker as HTMLElement).style.display = 'none';
    }
  }

  
}
