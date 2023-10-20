import { Component } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';
import { Worker } from '../../../models/worker.model';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent {
  workers: Worker[] = [];

  constructor(workerService: WorkersService){
    this.workers = workerService.getWorkers();

  }
}
