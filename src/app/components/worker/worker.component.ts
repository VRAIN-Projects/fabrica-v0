import { Component, Input } from '@angular/core';
import { Worker } from '../../models/worker.model';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent {
  @Input() worker: Worker = new Worker();
  @Input() origin: boolean = false;

  constructor() { 
    
  }


}
