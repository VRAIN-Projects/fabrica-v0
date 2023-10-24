import { Component } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';
import { Worker } from '../../../models/worker.model';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent {
  workers: Worker[] = [];

  constructor(workerService: WorkersService){
    this.workers = workerService.getNonHumanWorkers();
  }
}
