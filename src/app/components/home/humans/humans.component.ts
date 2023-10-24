import { Component } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';
import { Worker } from '../../../models/worker.model';

@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.css']
})
export class HumansComponent {
  workers: Worker[] = [];

  constructor(workerService: WorkersService){
    this.workers = workerService.getHumanWorkers();

  }
}
