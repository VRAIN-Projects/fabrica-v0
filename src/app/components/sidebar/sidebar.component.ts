import { Component } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';
import { Worker } from '../../models/worker.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  workers: Worker[] = [];

  constructor(workerService: WorkersService){
    this.workers = workerService.getWorkers();

  }
}
